<template>
  <div id="omnibar" class="Flex">
    <div id="left">
      <div id="dash">
        <p>Current run</p>
      </div>
      <div class="box">
        <clock/>
        <img src="./omniing/bsgstick.png" :style="{ padding: '0 10px' }">
      </div>
    </div>
      <div class="background">
        <ticker/>
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
  display: flex;
  position: fixed;
  flex-grow: 1;
  justify-content: space-between;
  width: 1920px;
  height: 82px;

  background: linear-gradient(180deg, var(--bg-start) 0%, var(--bg-end) 100%);

  #left {
    display: inline-flex;
    align-self: flex-start;

    .box {
      display: inline-flex;
      height: 82px;
      width: 256px;
      background: var(--bsg-color);
      border-radius: 0px 0px 34px 0px / 0px 0px 100px 0px;

      /*img {
        width: 50px;
        height: 50px;
      }*/
    }
  }

  #right {
    display: inline-flex;
    align-self: flex-end;

    .box {
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
