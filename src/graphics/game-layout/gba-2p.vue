<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/gba_2_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=""
      :slot-no="0"
      :style="{
        left: '0px',
        top: '0px',
        width: '956px',
        height: '638px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="1"
      finish-time-pos="bottomright"
      :style="{
        left: '964px',
        top: '0px',
        width: '956px',
        height: '638px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture "
      :style="{
        left: '726px',
        top: '757px',
        width: '470px',
        height: '240px',
      }"
    />

    <!-- Player 1/Commentator -->
    <div
      class="Fixed"
      :style="{
        left: '189px',
        top: '672px',
        width: '520px',
        height: '85px'
      }"
    >
      <player :slot-no="0" />
    </div>

    <!-- Player 2/General Run Info -->
    <div
      class="Fixed FlexColumn"
      :style="{
        left: '1209px',
        top: '652px',
        width: '520px',
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
          left: '1213px',
          top: '727px',
          width: '534px',
          height: '270px',
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
          top: '656px',
          width: '412px',
          height: '75px',
        }"
      >
        <timer />
      </div>

    <!-- Media Box -->
    <media-box
      :style="{
        left: '41px',
        top: '750px',
        width: '668px',
        height: '248px',

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
