<template>
  <v-app v-if="online">
    <!-- eslint-disable-next-line vue/valid-v-model -->
    <div v-for="feed in feeds" :key="feed.feedIndex">
      <RTMPFeed :value="feed" />
      <hr>
    </div>
    <pre>{{ feeds }}</pre>
    <v-btn>Save</v-btn>
  </v-app>
  <v-app v-else>
    <p>Disabled for in-person events</p>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Configschema, RtmpFeed as RtmpSettings } from '@esa-layouts/types/schemas';
import RTMPFeed from './components/RTMPFeed.vue';

@Component({
  components: {
    RTMPFeed,
  },
})
export default class extends Vue {
  online = (nodecg.bundleConfig as Configschema).event.online;
  feeds: RtmpSettings[] = [
    {
      streamKey: '',
      editAllowed: true,
      enabled: true,
      feedIndex: 1,
      server: 'eu',
    },
    {
      streamKey: '',
      editAllowed: true,
      enabled: false,
      feedIndex: 2,
      server: 'na',
    },
  ];

  created(): void {
    // TODO: read data from obs
    // sources "[rtmp] feed {index}"
    // Stream keys auto generated from runner's username ({usn + rng}?)
  }

  updateInObs(): void {
    // TODO: update data in obs
  }

  @Watch('feeds', { deep: true })
  onFeedsChange() {
    // TODO: Check if data is changed and enable save button
  }
}
</script>

<style>
hr {
  margin-bottom: 5px;
}
</style>
