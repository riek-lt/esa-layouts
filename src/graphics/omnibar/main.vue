<template>
  <div id="omnibar">
    <div id="information" :class="{ 'no-dash': !dashInfo }" :style="{
      width: dashInfo && infoWidth,
    }">
      <ticker @set-dash="updateDash"/>
    </div>
    <div id="left">
      <transition name="omnibar-dash">
        <div class="dashContainer" v-if="dashInfo" :key="JSON.stringify(dashInfo)">
          <div class="arrow_base dash_seg_2" />
          <div class="arrow_base dash_seg_1" />
          <div id="dash" >
            <p :style="{
            'font-size': `${dashInfo.fontSize}px`,
            'top': `${dashInfo.top}px`,
          }">{{ dashInfo.text }}</p>
          </div>
        </div>
      </transition>
      <div class="arrow_base after_left_box" />
      <div class="box">
        <clock class="clock"/>
      </div>
    </div>
        <div id="right">
          <div class="dashContainer">
            <div class="arrow_base right dash_seg_2" />
            <div class="arrow_base right dash_seg_1" />
            <div class="dash">
              <total :style="{
                // 'padding-left': '100px',
                // 'padding-top': '8px',
                'margin-right': '3px',
                'text-align': 'right',
                'font-family': 'Bahnschrift',
                }"
                @totalUpdate="updateInfoWidth"
              />
            </div>
          </div>
          <div class="arrow_base right after_right_box" />
          <div class="box">
            <img src="./omniing/mind_logo.png" alt="">
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { replicantModule } from '@esa-layouts/browser_shared/replicant_store';
import Total from './components/Total.vue';
import Ticker from './components/Ticker.vue';
import Clock from './components/Clock.vue';
import { DashProps, Omnibar } from '../../types/schemas';

@Component({
  components: {
    Total,
    Ticker,
    Clock,
  },
})
export default class extends Vue {
  dashInfo?: DashProps | null | undefined = null;
  infoWidth = '981px';

  updateInfoWidth(newTotal: number): void {
    if (newTotal < 1000) {
      this.infoWidth = '1045px';
      return;
    }

    if (newTotal < 10000) {
      this.infoWidth = '1015px';
      return;
    }

    if (newTotal < 100000) {
      this.infoWidth = '986px';
    }
  }

  updateDash(newDashText: DashProps | null | undefined): void {
    this.dashInfo = newDashText;
  }

  created(): void {
    const omnibar = replicantModule.reps.omnibar as Omnibar;
    this.dashInfo = omnibar?.current?.props?.dash;
  }
}
</script>

<style lang="scss">
@import "~animate.css";

* {
  --dash-left-width: 160px;
  --dark-arrow-default: #232323;
}

html, body {
  padding: 0;
  margin: 0;
}

.arrow_base {
  position: relative;
  top: 0px;
  --color: var(--bsg-color);
  --size: 82px;

  display: block;
  width: var(--size);
  height: 82px;
  background: var(--color);
  clip-path: polygon(63% 0, 100% 50%, 63% 100%, 0% 100%, 0 51%, 0% 0%);

  &.right {
    clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 40% 100%, 0% 50%);
  }
}

#omnibar {
  //display: flex;
  position: relative;
  //position: fixed;
  flex-grow: 1;
  width: 1920px;
  height: 82px;

  //background: var(--main-bg-color);
  background-image: url('./omniing/background.png');
  //background: yellow;

  #left {
    position: absolute;

    .box {
      position: absolute;
      left: 0;
      height: 82px;
      width: var(--dash-left-width);
      background: var(--slide-color);
      clip-path: polygon(80% 0, 100% 50%, 80% 100%, 0% 100%, 0 51%, 0% 0%);
    }

    .after_left_box {
      position: absolute;
      --color: var(--dark-arrow-default);
      left: calc(var(--dash-left-width) - 60px);
    }

    #logobsg {
      position: relative;
      left: 169px;
      width: 50px;
      height: 50px;
      top: -62px;
    }

    .dashContainer {
      position: absolute;
      left: calc(var(--dash-left-width) - 14px);
      animation-duration: 500ms;
      height: 82px;
      top: 0;

      &.hide {
        display: none;
      }

      #dash {
        position: relative;
        background: var(--bsg-color);
        clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%);
        //left: calc(var(--dash-left-width) - 14px);
        top: -164px;
        width: 300px;
        height: 82px;
        font-family: 'Goodlight';

        p {
          color: white;
          position: absolute;
          left: 34px;
          max-width: 200px;
          word-break: break-word;
          top: 22px;
          font-size: 1.9vw;
          text-transform: uppercase;
          vertical-align: middle;
          text-align: center;
          margin: 0;
        }
      }

      .dash_seg_1 {
        --color: var(--dark-arrow-default);
        left: 240px;
        top: -82px;
      }

      .dash_seg_2 {
        --color: var(--bsg-color);
        left: 260px;
      }
    }
  }

  #information {
    transform: translateY(-50%);
    top: 50%;

    position: absolute;
    color: white;
    font-size: 39px;
    //top: calc((82px - 50px) / 2);
    left: 489px;
    width: 981px;
    /* TODO: make this fit automatically */
    //width: 883px;
    //box-sizing: border-box;
    //border: 1px green solid;
    animation-duration: 500ms;
    height: 82px;

    &.no-dash {
      //left: 269px;
      left: 194px;
      width: 1285px;

      /* HACK: normal text is different */
      transform: unset;
      top: 5px;
    }
  }

  #right {
    position: absolute;
    right: 0;
    top: 0;

    .box {
      position: absolute;
      right: 0;
      top: 0;
      height: 82px;
      width: 177px;
      background: var(--slide-color);
      clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%);

      img {
        position: relative;
        height: 82px;
        //left: 79px;
        left: 58px;
      }
    }

    // TODO: make this be able to grow and shrink
    .after_right_box {
      position: absolute;
      --color: var(--dark-arrow-default);
      right: 120px;
    }

    .dash_seg_1 {
      --color: var(--dark-arrow-default);
      right: 310px;
      top: -82px;
    }

    .dash_seg_2 {
      --color: var(--bsg-color);
      right: 335px;
    }

    .dash {
      padding-left: 40px;
      padding-right: 5px;

      position: absolute;
      right: 160px;
      min-width: 180px;
      height: 82px;
      top: 0;
      animation-duration: 500ms;
      background: var(--bsg-color);
      clip-path: polygon(100% 0%, 85% 50%, 100% 100%, 25% 100%, 10% 50%, 25% 0%);

      &.hide {
        display: none;
      }

      p {
        color: white;
        position: relative;
        top: calc((82px - 50px) / 2);
        // left: 114px;
        font-size: 39px;
      }
    }
  }
}

#GenericMessage {
  padding-top: 8px;
}

@mixin calcAnimation($startDelay) {
  animation: slideOutLeft;
  animation-duration: calc(500ms - $startDelay);
  animation-timing-function: ease-in-out;

  animation-delay: $startDelay !important;
}

.omnibar-dash-leave-active {
  @include calcAnimation(0ms);

  .dash_seg_2 {
    @include calcAnimation(0ms);
  }

  .dash_seg_1 {
    @include calcAnimation(100ms);
  }

  #dash {
    @include calcAnimation(200ms);
  }
}

.omnibar-dash-enter-active {
  animation: slideInLeft;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;

  #dash {
    animation-delay: 0ms;
  }

  .dash_seg_1 {
    animation-delay: 200ms;
  }

  .dash_seg_2 {
    animation-delay: 400ms;
  }
}

.omnibar-dash-enter, .omnibar-dash-leave-to {
  left: -20px;
  .dash_seg_1, .dash_seg_2, #dash {
    left: -20px;
  }
}
</style>
