/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Configschema {
	useTestData: boolean;
	event: {
		theme?: string;
		shorts: string | [string] | [string, string];
		thisEvent: number;
		online: boolean | ('partial' | 'full');
	};
	streamdeck: {
		enable: boolean;
		port: number;
		key: string;
		debug: boolean;
	};
	rabbitmq: {
		enable: boolean;
		protocol: string;
		hostname: string;
		username: string;
		password: string;
		vhost: string;
	};
	obs: {
		enable: boolean;
		address: string;
		password: string;
	} & {
		names: {
			scenes: {
				commercials: string;
				gameLayout: string;
				intermission: string;
				videoPlayer: string;
				countdown: string;
			};
			sources: {
				gameCapture1: string;
				gameCapture2: string;
				gameCapture3: string;
				gameCapture4: string;
				cameraCapture1: string;
				cameraCapture2: string;
				cameraCapture3: string;
				videoPlayer: string;
			};
		};
	};
	music: {
		enable: boolean;
		address: string;
		username: string;
		password: string;
	};
	x32: {
		enable: boolean;
		ip: string;
		localPort: number;
	};
	tracker: {
		enable: boolean;
		address: string;
		username: string;
		password: string;
	};
	tts: {
		enable: boolean;
		voiceAPI: string;
	};
}
