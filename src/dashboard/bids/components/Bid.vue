<template>
  <media-card
    class="d-flex align-center px-2"
    :style="{ 'text-align': 'unset', height: '40px', 'margin-top': index > 0 ? '10px' : 0 }"
  >
    <div class="flex-grow-1" :style="{ overflow: 'hidden' }">
      <span
        :class="{ 'font-italic': isPinned && bid.name.includes('no longer available') }"
      >
        {{ bid.game || 'N/A' }} - {{ bid.name }}
      </span>
    </div>
    <v-spacer />
    <v-icon @click="pin">
      <template v-if="isPinned">mdi-pin-off</template>
      <template v-else>mdi-pin</template>
    </v-icon>
    <v-spacer />
    <v-btn elevation="2" :color="isSoloed ? 'warning' : ''" @click="toggleSolo">
      <v-icon>
        <template v-if="isSoloed">mdi-crosshairs-gps</template>
        <template v-else>mdi-crosshairs</template>
      </v-icon>
    </v-btn>
  </media-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import MediaCard from '@esa-layouts/dashboard/_misc/components/MediaCard.vue';
import { Bids, Omnibar, SoloedBidID } from '@esa-layouts/types/schemas';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { storeModule } from '../store';

@Component({
  components: {
    MediaCard,
  },
})
export default class extends Vue {
  @Prop({ type: Object, required: true }) readonly bid!: Bids[0];
  @Prop({ type: Number, required: true }) readonly index!: number;
  @replicantNS.State((s) => s.reps.omnibar.pin) readonly currentPin!: Omnibar['pin'];
  @replicantNS.State((s) => s.reps.soloedBidID) readonly soloedBidID!: SoloedBidID;

  get isPinned(): boolean {
    return this.currentPin?.type === 'Bid' && this.currentPin.id === this.bid.id;
  }

  get isSoloed(): boolean {
    return this.soloedBidID === this.bid.id;
  }

  pin(): void {
    storeModule.pinItem({ id: this.bid.id, pinned: !this.isPinned });
  }

  toggleSolo(): void {
    if (this.isSoloed) {
      storeModule.clearSolo();
    } else {
      storeModule.setSolo(this.bid.id);
    }
  }
}
</script>
