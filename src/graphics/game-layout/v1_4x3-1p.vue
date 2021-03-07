<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/v1Background43.png)`,
'background-repeat': 'no-repeat'}
">

  <div>
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class="BlockRed"
      :style="{
        left: '409px',
        top: '7px',
        width: '860px',
        height: '645px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '30px',
        top: '473px',
        width: '323px',
        height: '183px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn BlockGreen v1BG"
      :style="{
        left: '10px',
        top: '277px',
        width: '392px',
        height: '84px',
      }"
    >
      <player />
      <!-- <comm-and-reader /> -->
      </div>

            <!-- Run Game Info/Timer -->
      <div
        class="Flex BlockYellow v1BG"
        :style="{
          flex: '1',
          left: '0px',
          top: '0px',
          width: '396px',
          height: '208px',
        }"
      >
        <run-info />
      </div>

      <!--TIMER-->
      <div
        class="Fixed FlexColumn BlockBlack v1BG"
        :style="{
          flex: '1',
          left: '8px',
          top: '373px',
          width: '396px',
          height: '93px',
          'font-size': '12pt',
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
