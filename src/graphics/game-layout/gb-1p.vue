<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/gameboy_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class="BlockRed"
      :style="{
      left: '700px',
      top: '0px',
      width: '1110px',
      height: '998px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
      left: '0px',
      top: '297px',
      width: '554px',
      height: '303px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn BlockGreen"
      :style="{
      left: '0px',
      top: '622px',
      width: '536px',
      height: '82px',
      }"
    >
      <player />
      <!--<commentators-reader />
      <commentators-reader show-reader />-->

      <!-- Run Game Info/Timer -->
      <div
        class="Flex"
        :style="{ flex: '1',
        left: '0px',
        top: '70px',
        width: '552px',
        height: '208px',
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
        left: '16px',
        top: '732px',
        width: '535px',
        height: '103px',
      }"
    >
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

@Component({
  components: {
    GameCapture,
    Player,
    CommentatorsReader,
    RunInfo,
    Timer,
    MediaBox,
    DonationBar,
  },
})
export default class extends Vue {}
</script>
