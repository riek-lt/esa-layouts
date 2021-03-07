<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/ds_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=" "
      :style="{
        left: '589px',
        top: '0px',
        width: '1331px',
        height: '998px',
      }"
    />
    <game-capture
      id="GameCapture2"
      class=""
      :style="{
        left: '102px',
        top: '710px',
        width: '386px',
        height: '288px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture"
      :style="{
        left: '8px',
        top: '230px',
        width: '546px',
        height: '292px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn BlockGreen"
      :style="{
        left: '0px',
        top: '513px',
        width: '553px',
        height: '85px',
      }"
    >
      <player />
      <!-- <comm-and-reader /> -->
      </div>

            <!-- Run Game Info/Timer -->
      <div
        class=" Fixed FlexColumn BlockYellow"
        :style="{
          flex: '1',
          'max-width': '100%',
          left: '0px',
          top: '0px',
          width: '555px',
          height: '231px',
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
          left: '17px',
          top: '613px',
          width: '536px',
          height: '85px',
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
