<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/v1Background169.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class="BlockRed"
      :style="{
        left: '483px',
        top: '0px',
        width: '1437px',
        height: '809px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '8px',
        top: '9px',
        width: '440px',
        height: '366px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn BlockGreen"
      :style="{
        left: '0px',
        top: '363px',
        width: '447px',
        height: '86px',
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
          left: '1213px',
          top: '827px',
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
          left: '495px',
          top: '864px',
          width: '692px',
          height: '162px',
        }"
      >
        <timer />
      </div>

    <!-- Media Box -->
    <media-box
    class="Fixed FlexColumn BlockPurple"
      :style="{
        left: '18px',
        top: '458px',
        width: '428px',
        height: '541px',
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
