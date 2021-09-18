<template>
  <div id="Omnibar" class="Flex">
    <div :style="{
        'background-Image': 'url(./img/omniing/logo-bsg.png)',
        'width': '256px',
        'z-index': '3',
        'position': 'static',
        'overflow': 'visible',
         }">
         <clock/>
        <!--<img src="./bsgstick.png" :style="{ padding: '0 10px' }">-->
      </div>
      <!--<sub-goal-met></sub-goal-met>
      <divider></divider>-->
      <div :style="{
        'background-Image': 'url(./img/omniing/background.png)',
        'width': '1200px',
        'z-index': '1',
         }">
        <ticker/>
      </div>
        <div :style="{
        'position': 'static',
        'overflow': 'visible',
        'background-Image': 'url(./img/omniing/logo-charity-mind.png)',
        'width': '500px',
        'z-index': '1',
        }">
      <total :style="{
          'padding-left': '100px',
          'padding-top': '8px',
          'text-align': 'right',
          'font-family': 'Goodlight',
          }"/>
      </div>
    </div>
</template>

<script>
import Total from './components/Total.vue';
import Ticker from './components/Ticker.vue';
import Clock from './components/Clock.vue';

const runDataActiveRun = nodecg.Replicant('runDataActiveRun', 'nodecg-speedcontrol');

export default {
  name: 'Omnibar',
  components: {
    Total,
    // SubGoalMet,
    Ticker,
    Clock,
  },
};
</script>

<style>
#Omnibar {
  position: fixed;
  width: 1920px;
  height: 80px;
  justify-content: flex-start;
}
#GenericMessage {
  padding-top: 8px;
}
</style>
