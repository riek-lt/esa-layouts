<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/4x3_1_Tall.png)`,
'background-repeat': 'no-repeat'}
">

  <div>
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class="BlockRed"
      :style="{
        left: '589px',
        top: '0px',
        width: '1331px',
        height: '998px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '10px',
        top: '226mpx',
        width: '557',
        height: '569px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn  BlockGreen"
      :style="{
        left: '0px',
        top: '788px',
        width: '551px',
        height: '82px',
      }"
    >
      <player />
      <!-- <comm-and-reader /> -->
      </div>

            <!-- Run Game Info/Timer -->
      <div
        class="FlexColumn BlockYellow"
        :style="{
          flex: '1',
          'max-width': '100%',
          left: '0px',
          top: '0px',
          width: '552px',
          height: '228px',
        }"
      >
        <run-info />
      </div>

      <!--TIMER-->
      <div
        class="Fixed FlexColumn BlockBlack"
        :style="{
          flex: '1',
          width: '100%',
          left: '19px',
          top: '899px',
          width: '536px',
          height: '108px',
        }"
      >
        <timer />
      </div>

    <!-- Media Box -->


    <!-- Donation Bar -->
  </div>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GameCapture from './components/GameCapture.vue';
import Player from './components/Player.vue';
import CommAndReader from './components/CommAndReader.vue';
import RunInfo from './components/RunInfo.vue';
import Timer from './components/Timer.vue';
import MediaBox from '../_misc/components/MediaBox.vue';
import DonationBar from './components/DonationBar.vue';

@Component({
  components: {
    GameCapture,
    Player,
    CommAndReader,
    RunInfo,
    Timer,
    MediaBox,
    DonationBar,
  },
})
export default class extends Vue {}
</script>
