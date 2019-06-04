import amqpConnectionManager from 'amqp-connection-manager';
import amqplib from 'amqplib';
import { EventEmitter } from 'events';
import * as nodecgUtils from './nodecg';

interface MQEmitter extends EventEmitter {
  // Remote
  on(event: 'evt-donation-total', listener: (data: any) => void): this;
  on(event: 'donation-fully-processed', listener: (data: any) => void): this;
  on(event: 'new-screened-tweet', listener: (data: any) => void): this;
  on(event: 'new-screened-sub', listener: (data: any) => void): this;

  // Local
  on(event: 'flagcarrier-tag-scanned', listener: (data: any) => void): this;
  on(event: 'BigButton', listener: (data: any) => void): this;

  on(event: string, listener: Function): this;
}

interface RabbitMQConfig {
  protocol: string;
  hostname: string | undefined;
  username: string | undefined;
  password: string | undefined;
  vhost: string | undefined;
}

const nodecg = nodecgUtils.getCtx();
export const mq: MQEmitter = new EventEmitter();
nodecg.log.info('Setting up RabbitMQ connections.');

// Remote/local queues we need to listen on.
const remoteQueues = [
  'evt-donation-total',
  'donation-fully-processed',
  'new-screened-tweet',
  'new-screened-sub',
];
const localQueues = [
  'flagcarrier-tag-scanned',
  'BigButton',
];

// Remote connection.
const remoteConn = amqpConnectionManager.connect(
  [buildMQURL(nodecg.bundleConfig.rabbitmq.remote)],
).on('connect', () => {
  nodecg.log.info('RabbitMQ remote server connection successful.');
}).on('disconnect', (err) => {
  nodecg.log.warn('RabbitMQ remote server connection closed.');
  if (err) {
    nodecg.log.warn('RabbitMQ remote server connection error: ', err);
  }
});
const remoteChan = remoteConn.createChannel({
  json: false,
  setup(chan: amqplib.ConfirmChannel) {
    listenToQueues(chan);
    nodecg.log.info('RabbitMQ remote server connection listening to queues.');
    return;
  },
}).on('error', (err) => {
  nodecg.log.warn('RabbitMQ remote server channel error: ', err);
});

// Local connection.
const localConn = amqpConnectionManager.connect([
  buildMQURL(nodecg.bundleConfig.rabbitmq.local)],
).on('connect', () => {
  nodecg.log.info('RabbitMQ local server connection successful.');
}).on('disconnect', (err) => {
  nodecg.log.warn('RabbitMQ local server connection closed.');
  if (err) {
    nodecg.log.warn('RabbitMQ local server connection error: ', err);
  }
});
const localChan = localConn.createChannel({
  json: false,
  setup(chan: amqplib.ConfirmChannel) {
    listenToQueues(chan, true);
    nodecg.log.info('RabbitMQ local server connection listening to queues.');
    return;
  },
}).on('error', (err) => {
  nodecg.log.warn('RabbitMQ remote server channel error: ', err);
});

function listenToQueues(chan: amqplib.ConfirmChannel, local?: boolean) {
  const queues = local ? localQueues : remoteQueues;
  for (const queue of queues) {
    chan.assertQueue(queue);
    chan.consume(queue, (msg) => {
      if (msg && msg.content) {
        mq.emit(queue, JSON.parse(msg.content.toString()));
      }
    }, { // tslint:disable-next-line: align
      noAck: true,
    });
  }
}

/**
 * Used to send messages over the RabbitMQ connections.
 * @param queue The name of the queue this message should be sent to.
 * @param data The data that should be sent in this message.
 * @param local If this should be sent to the local server (instead of the remove server).
 */
export function send(queue: string, data: object, local?: boolean) {
  const chan = local ? localChan : remoteChan;
  chan.sendToQueue(
    queue,
    Buffer.from(JSON.stringify(data)),
  );
  queueLog(queue, JSON.stringify(data));
}

// Used for debugging.
function queueLog(queue: string, data: string, local?: boolean) {
  nodecg.log.debug(
    `Sending message to RabbitMQ queue [${local ? 'local' : 'remote'} server] %s: %s`,
    queue, data,
  );
}

function buildMQURL(rabbitmq: RabbitMQConfig) {
  let url = `${rabbitmq.protocol}://`;
  if (rabbitmq.username) {
    url = `${url}${rabbitmq.username}`;
  }
  if (rabbitmq.username && rabbitmq.password) {
    url = `${url}:`;
  }
  if (rabbitmq.password) {
    url = `${url}${rabbitmq.password}`;
  }
  url = `${url}@${rabbitmq.hostname}`;
  if (rabbitmq.vhost) {
    url = `${url}/${rabbitmq.vhost}`;
  }
  return url;
}
