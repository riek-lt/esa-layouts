<template>
  <div class="Flex">
    <div
      id="Total"
      class="Flex"
    >
      <audio ref="SFX">
        <source
          src="./sfx/mario_coin.mp3"
          type="audio/mpeg"
        >
      </audio>
      <span
        v-for="(char, i) in totalSplitString"
        :key="i"
        :class="(char === ',' ? 'Comma' : undefined)"
      >
        {{ char }}
      </span>
    </div>

    <div :style="{
      position: 'absolute',
      top: '10px',
    }">
      <transition
        name="fade"
        mode="out-in"
      >
        <div
          v-if="alertList[0]"
          :key="alertList[0].timestamp"
          class="Flex"
        >
          <img
            src="../omniing/RetroCoin.png"
            :style="{ height: '50px', 'image-rendering': 'pixelated', 'margin-right': '5px' }"
          >
          <span
            :style="{
                'font-size': '28px',
                color: '#7FFF00',
                'font-weight': 600,
                'background-color': 'rgba(0,0,0,0.6)',
                padding: '4px 8px',
                'border-radius': '10px',
              }"
          >
              {{ alertList[0] ? alertList[0].amount : '€0' }}
            </span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
import { formatUSD } from '../../_misc/helpers';

const totalRep = nodecg.Replicant('donationTotal');

export default {
  name: 'Total',
  data() {
    return {
      init: false,
      total: -1,
      tweenedTotal: -1,
      totalSplitString: [],
      alertList: [],
      playingAlerts: false,
    };
  },
  watch: {
    total(newVal, oldVal) {
      if (this.init) {
        this.alertList.push({
          total: newVal, amount: formatUSD(newVal - oldVal), timestamp: Date.now(),
        });
        if (!this.playingAlerts) {
          this.playNextAlert(true);
        }
      } else {
        this.tweenedTotal = this.total;
        this.init = true;
      }
    },
    tweenedTotal(val) {
      this.totalSplitString = formatUSD(val).split('');
    },
  },
  async mounted() {
    totalRep.on('change', (newVal) => {
      this.total = newVal;
      // this.total = 1000;
    });

    // Keep the SFX playing constantly but on mute to avoid garbage collection (hopefully).
    this.$refs.SFX.muted = true;
    await this.$refs.SFX.play();
    this.$refs.SFX.addEventListener('ended', async () => {
      this.$refs.SFX.muted = true;
      await this.$refs.SFX.play();
    });
  },
  methods: {
    async playNextAlert(start = false) {
      this.playingAlerts = true;
      if (!start) {
        await new Promise((res) => { setTimeout(res, 500); });
      }
      this.playSound();
      await new Promise((res) => { setTimeout(res, 500); });
      TweenLite.to(this.$data, 5, { tweenedTotal: this.alertList[0].total });
      window.setTimeout(() => {
        this.alertList.shift();
        if (this.alertList.length) {
          this.playNextAlert();
        } else {
          this.playingAlerts = false;
        }
      }, 6000);
    },
    async playSound() {
      try {
        await this.$refs.SFX.pause();
        this.$refs.SFX.currentTime = 0;
        await this.$refs.SFX.play();
        this.$refs.SFX.muted = false;
      } catch (err) {
        // catch
      }
    },
  },
};
</script>

<style scoped>
  #Total {
    padding: 0 13px 0 0;
    font-size: 40px;
    font-weight: 500;
    text-align: left;
    float: right;
  }

  /* Each character in the total is in a span; setting width so the numbers appear monospaced. */
  #Total > span {
    padding-top: 10px;
    display: inline-block;
    text-align: center;
    background: var(--slide-color);
    position: relative;
  }

  #Total span:first-of-type {
    padding-left: 10px;
  }

  #Total span:first-of-type:before {
    content: '';
    position: absolute;
    background: url('../omniing/right_dash_front.png');
    background-position: center center;
    background-size: cover;
    height: 82px;
    width: 104px;
    left: -104px;
    top: 0px;
  }

  #Total span:last-of-type {
    padding-right: 10px;
  }

  #Total span:last-of-type:after {
    content: '';
    position: absolute;
    background: url('../omniing/right_dash_back.png');
    background-position: center center;
    background-size: cover;
    height: 82px;
    width: 44px;
    right: -44px;
    top: 0px;
  }

  #Total > .Comma {
    display: inline-block;
    width: 0.22em;
    text-align: center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter, .fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
