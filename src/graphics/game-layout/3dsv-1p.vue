<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/3DS_Stack.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=" "
      :style="{
        left: '846px',
        top: '0px',
        width: '809px',
        height: '487px',
      }"
    />
    <game-capture
      id="GameCapture2"
      class=""
      :style="{
        left: '928px',
        top: '513px',
        width: '646px',
        height: '485px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '8px',
        top: '273px',
        width: '546px',
        height: '355px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn  BlockGreen"
      :style="{
        left: '0px',
        top: '620px',
        width: '553px',
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
          top: '730px',
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
        top: '849px',
        width: '537px',
        height: '149px',
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
