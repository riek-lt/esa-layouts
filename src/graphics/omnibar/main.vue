<template>
  <div id="omnibar">
    <div id="information" class="no-dash">
      <ticker/>
    </div>
    <div id="left">
<!--      <div id="dash">
        <p>Current run</p>
      </div>-->
      <div class="box">
        <clock/>
        <img src="./omniing/bsgstick.png"  id="logobsg">
      </div>
    </div>
        <div id="right">
      <total :style="{
          // 'padding-left': '100px',
          // 'padding-top': '8px',
          'margin-right': '3px',
          'text-align': 'right',
          'font-family': 'Goodlight',
          }"/>
          <div class="box">
            <img src="./omniing/mind_logo.png" alt="">
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Total from './components/Total.vue';
import Ticker from './components/Ticker.vue';
import Clock from './components/Clock.vue';

@Component({
  components: {
    Total,
    Ticker,
    Clock,
  },
})
export default class extends Vue {
  // code
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}

* {
  --bsg-color: #cf773b;
  --slide-color: #914e21;
  --bg-start: #303030;
  --bg-end: #212121;
}

#omnibar {
  //display: flex;
  position: relative;
  //position: fixed;
  flex-grow: 1;
  width: 1920px;
  height: 82px;

  background: linear-gradient(180deg, var(--bg-start) 0%, var(--bg-end) 100%);

  #left {
    position: absolute;

    .box {
      position: absolute;
      left: 0;
      height: 82px;
      width: 256px;
      background: var(--bsg-color);
      border-radius: 0px 0px 34px 0px / 0px 0px 100px 0px;

      /*img {
        width: 50px;
        height: 50px;
      }*/
    }

    #logobsg {
      position: relative;
      left: 169px;
      width: 50px;
      height: 50px;
      top: calc((82px - 202px) / 2);
      font-size: 39px;
    }

    #dash {
      position: absolute;
      background: url("https://i.duncte123.me/bsg/left_dash.png?v2");
      left: 244px;
      width: 321px;
      height: 82px;
      top: 0;
      animation-duration: 500ms;

      &.hide {
        display: none;
      }

      p {
        color: white;
        position: absolute;
        left: 52px;
        max-width: 200px;
        word-break: break-word;
        font-size: 39px;
        top: calc((82px - 118px) / 2);
        vertical-align: middle;
        text-align: center;
      }
    }
  }

  #information {
    position: absolute;
    color: white;
    font-size: 39px;
    top: calc((82px - 50px) / 2);
    left: 545px;
    animation-duration: 500ms;

    &.no-dash {
      left: 269px;
    }

    &.show {
      opacity: 1;
      animation: fadeInUp;
      animation-duration: 500ms;
    }

    &.hide {
      display: none;
    }
  }

  #right {
    position: absolute;
    right: 0;
    top: 0;

    .box {
      position: absolute;
      right: 0;
      height: 82px;
      width: 203px;
      background: var(--bsg-color);
      // border-radius: 0px 0px 0px 34px / 0px 0px 0px 100px;
      border-radius: 0px 0px 0px 34px / 0px 0px 0px 85px;

      img {
        position: relative;
        height: 82px;
        left: 79px;
      }
    }
  }
}

#GenericMessage {
  padding-top: 8px;
}
</style>
