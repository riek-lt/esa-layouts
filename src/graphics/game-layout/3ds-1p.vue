<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/3ds_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=" "
      :style="{
      left: '573px',
      top: '0px',
      width: '1347px',
      height: '809px',
      }"
    />
    <game-capture
      id="GameCapture2"
      class=" "
      :style="{
      left: '8px',
      top: '594px',
      width: '538px',
      height: '404px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture"
      :style="{
      left: '8px',
      top: '8px',
      width: '530px',
      height: '364px',
      }"
    />

    <!-- Run Game Info/Timer -->
    <div
      class="Fixed Flex"
      :style="{
      left: '1213px',
      top: '829px',
      width: '680px',
      height: '170px',
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
              top: '476px',
              width: '519px',
              height: '109px',
            }"
          >
            <timer />
    </div>

    <!-- Player/Commetator -->
    <div
      class="Fixed"
      :style="{
      left: '0px',
      top: '381px',
      width: '537px',
      height: '85px',
      }"
    >
      <player />
      <!--<commentators-reader />
      <commentators-reader show-reader />-->
    </div>

    <!-- Media Box -->

    <media-box
    class="Fixed FlexColumn BlockPurple"
      :style="{
        left: '582px',
        top: '827px',
        width: '602px',
        height: '173px',
      }"
    />

    <!-- Donation Bar -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MediaBox from '@esamarathon/esa-layouts-shared/mediabox/graphics';
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
