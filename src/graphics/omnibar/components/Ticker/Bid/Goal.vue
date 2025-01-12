<template>
  <div
    class="Goal"
    :style="{
      height: '100%',
      display: 'flex',
      'align-items': 'center',
    }"
  >
    <div
      :style="{
        position: 'relative',
        'flex-grow': 1,
        // margin: '10px',
        height: '70px',
        'background-color': 'rgba(0, 0, 0, 0.3)',
      }"
    >
      <div
        class="Bar"
        :style="{
          position: 'absolute',
          width: `${tweened.progress}%`,
          height: '100%',
          'background-color': '#6DD47E', // BSG
        }"
      />
      <div
        :style="{
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          padding: '0 10px',
          'box-sizing': 'border-box',
        }"
      >
        <div :style="{ width: '30%', 'font-size': '0px', }">
          <span class="BarText" :style="{ 'font-size': '20px' }">
            <span
              v-if="bid.goal <= bid.total"
              :style="{
                'color': '#42ff38', // Basic green, no need to use theme
                'font-weight': 700,
              }"
            >
              MET!
            </span>
            <span v-else>
              <span :style="{ 'font-weight': 600 }">Remaining:</span>
              {{ amountLeft }}
            </span>
          </span>
        </div>
        <div class="BarTextFull" :style="{ 'font-size': '20px', 'text-align': 'center' }">
          <div>
            {{ bid.game }}
            <br>{{ bid.name }}
          </div>
        </div>
        <div
          :style="{
            width: '30%',
            'text-align': 'right',
            'font-size': '0px',
          }"
        >
          <span class="BarText" :style="{ 'font-size': '25px' }">
            <span :style="{ 'font-weight': 600 }">Goal:</span>
            {{ formatUSD(bid.goal || 0) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Bids } from '@esa-layouts/types/schemas';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import gsap from 'gsap';
import { formatUSD, wait } from '@esa-layouts/graphics/_misc/helpers';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { getBid } from '@esa-layouts/omnibar/utils/bidwars';

@Component
export default class extends Vue {
  @Prop({ type: Number, required: true }) readonly seconds!: number;
  @Prop({ type: Number, required: true }) readonly bidId!: number;
  // @Prop({ type: Object, required: true }) readonly bid!: Bids[0];
  bid: Bids[0] = {
    id: -1,
    goal: 69,
    game: '',
    name: '',
    options: [],
    war: true,
    allowUserOptions: false,
    total: 0,
  };
  formatUSD = formatUSD;
  tweened = { progress: 0, total: 0 };
  @replicantNS.State(
    (s) => s.reps.bids,
  ) readonly allBids!: Bids;

  get amountLeft(): string {
    return formatUSD(Math.max((this.bid.goal ?? 0) - this.tweened.total, 0));
  }

  tweenValues(): void {
    gsap.to(this.tweened, {
      progress: (this.bid.total / (this.bid.goal ?? 0)) * 100,
      total: this.bid.total,
      duration: 2.5,
    });
  }

  // We watch all the bids so we can watch for changes. Props in pinned stuff do not change.
  @Watch('allBids', { deep: true, immediate: true })
  onBidRepChange(newVal: Bids): void {
    this.bid = getBid(newVal, this.bidId);
    this.tweenValues();
  }

  async created(): Promise<void> {
    this.bid = getBid(this.allBids, this.bidId);
    this.tweenValues();
    if (this.seconds >= 0) {
      await wait(this.seconds * 1000); // Wait the specified length.
      this.$emit('end');
    }
  }
}
</script>

<style scoped>
  .BarText {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 7px 10px;
    border-radius: 15px;
  }

  .BarTextFull {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 150%;
    height: 100%
  }
</style>
