<template>
<div class="bsglayout _gb_1p">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      :style="{
      left: '700px',
      top: '0px',
      width: '1108px',
      height: '1000px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture Relative"
      :style="{
      left: '0px',
      top: '336px',
      width: '576px',
      height: '347px',
      }"
    >
      <flashing-lights-warning/>
    </div>

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn"
      :style="{
      left: '0px',
      top: '286px',
      width: '575px',
      height: '44px',
      }"
    >
      <player />

      <!-- Run Game Info/Timer -->
      <div
        class="Fixed FlexColumn"
        :style="{ flex: '1',
        left: '0px',
        top: '0px',
        width: '563px',
        height: '281px',
    }"
      >
        <run-info />
      </div>
    </div>

    <!--host, comms, timer, and mediabox-->
    <div
      class="Fixed FlexColumn"
      :style="{
        flex: '1',
        left: '0px',
        top: '688px',
        width: '575px',
        height: '322px',
        background: 'red',
      }"
    >
      <commentators-reader />
      <commentators-reader show-reader />
      <timer />
    </div>

    <!-- Media Box -->
    <media-box
      :font-size="20"
      :style="{
      left: '24px',
      top: '840px',
      width: '528px',
      height: '157px',
      }"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MediaBox from '@shared/graphics/mediabox';
import GameCapture from './components/GameCapture.vue';
import Player from './components/Player.vue';
import CommentatorsReader from './components/CommentatorsReader.vue';
import RunInfo from './components/RunInfo.vue';
import Timer from './components/Timer.vue';
import DonationBar from './components/DonationBar.vue';
import FlashingLightsWarning from './components/FlashingLightsWarning.vue';

@Component({
  components: {
    GameCapture,
    Player,
    CommentatorsReader,
    RunInfo,
    Timer,
    MediaBox,
    DonationBar,
    FlashingLightsWarning,
  },
})
export default class extends Vue {}
</script>
