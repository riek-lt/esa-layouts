<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/3ds_vertical_2_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=" BlockRed"
      :slot-no="0"
      :style="{
        left: '0px',
        top: '178px',
        width: '660px',
        height: '397px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="0"
      class=" BlockRed"
      finish-time-pos="bottomright"
      :style="{
        left: '66px',
        top: '600px',
        width: '530px',
        height: '398px',
      }"
    />
    <game-capture
      id="GameCapture1"
      class="  BlockRed"
      :slot-no="1"
      :style="{
        left: '1259px',
        top: '178px',
        width: '660px',
        height: '397px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="1"
      class=" BlockRed"
      finish-time-pos="bottomright"
      :style="{
        left: '1325px',
        top: '600px',
        width: '530px',
        height: '398px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '686px',
        top: '600px',
        width: '547px',
        height: '396px',
      }"
    />

    <!-- Player 1/Commentator -->
    <div
      class="Fixed"
      :style="{
        left: '66px',
        top: '94px',
        width: '526px',
        height: '85px'
      }"
    >
      <player :slot-no="0" />
    </div>

    <!-- Player 2/General Run Info -->
    <div
      class="Fixed FlexColumn"
      :style="{
        left: '1314px',
        top: '76px',
        width: '526px',
        height: '85px'
      }"
    >
      <player :slot-no="1" />
</div>
      <!-- Run Game Info/Timer -->
      <div
        class="Fixed Flex BlockYellow"
        :style="{
          flex: '1',
          width: '100%',
          left: '678px',
          top: '18px',
          width: '546px',
          height: '278px',
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
          left: '745px',
          top: '327px',
          width: '412px',
          height: '69px',
        }"
      >
        <timer />
      </div>

    <!-- Media Box -->
    <media-box
      :style="{
        left: '678px',
        top: '432px',
        width: '563px',
        height: '151px',

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
