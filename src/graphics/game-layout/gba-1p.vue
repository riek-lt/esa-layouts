<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/gba_1_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class="BlockRed"
      :style="{
        left: '598px',
        top: '58px',
        width: '1332px',
        height: '882px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '8px',
        top: '273px',
        width: '555px',
        height: '354px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn BlockGreen"
      :style="{
        left: '0px',
        top: '620px',
        width: '560px',
        height: '83px',
      }"
    >
      <player />
      <!-- <comm-and-reader /> -->
      </div>

            <!-- Run Game Info/Timer -->
      <div
        class="Fixed Flex BlockYellow"
        :style="{
          flex: '1',
          width: '100%',
          left: '0x',
          top: '0px',
          width: '560px',
          height: '280px',
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
    class="Fixed FlexColumn BlockPurple"
      :style="{
        left: '19px',
        top: '840px',
        width: '545px',
        height: '158px',
      }"
    />

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
