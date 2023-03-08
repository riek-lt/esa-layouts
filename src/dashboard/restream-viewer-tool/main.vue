<template>
  <v-app v-if="online">
    <div v-for="feed in feeds" :key="feed.feedIndex">
      <RTMPFeed :value="feed" />
      <hr>
    </div>
    <v-btn :disabled="!canEdit" @click="updateInObs">Update OBS</v-btn>
  </v-app>
  <v-app v-else>
    <p>Disabled for in-person events</p>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Configschema, ObsData, RtmpFeed as RtmpSettings } from '@esa-layouts/types/schemas';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import RTMPFeed from './components/RTMPFeed.vue';

@Component({
  components: {
    RTMPFeed,
  },
})
export default class extends Vue {
  @replicantNS.State((s) => s.reps.obsData) readonly obsData!: ObsData;
  gameLayout = (nodecg.bundleConfig as Configschema).obs.names.scenes.gameLayout;
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

  get canEdit(): boolean {
    return this.feeds.map((feed) => feed.editAllowed).reduce((a, b) => a || b, false);
  }

  async mounted(): Promise<void> {
    if (!this.online) {
      return;
    }

    this.feeds = await nodecg.sendMessage('geRtmpSettings');

    const isOnGame = this.obsData.scene === this.gameLayout;

    for (const feed of this.feeds) {
      feed.editAllowed = !isOnGame;
    }

    // TODO: Stream keys auto generated from runner's username ({usn + rng}?)
  }

  async updateInObs(): Promise<void> {
    await nodecg.sendMessage('setRtmpSettings', this.feeds);
  }

  @Watch('obsData', { deep: true })
  onObsDataChange() {
    const isOnGame = this.obsData.scene === this.gameLayout;

    for (const feed of this.feeds) {
      feed.editAllowed = !isOnGame;
    }
  }
}
</script>

<style>
hr {
  margin-bottom: 5px;
}
</style>
