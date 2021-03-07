<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/gameboy2_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=""
      :slot-no="0"
      :style="{
        left: '88px',
        top: '0px',
        width: '796px',
        height: '716px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="1"
      finish-time-pos="bottomright"
      :style="{
        left: '1044px',
        top: '0px',
        width: '796px',
        height: '716px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture   "
      :style="{
        left: '725px',
        top: '835px',
        width: '470px',
        height: '164px',
      }"
    />

    <!-- Player 1/Commentator -->
    <div
      class="Fixed"
      :style="{
        left: '189px',
        top: '748px',
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
        top: '733px',
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
          top: '827px',
          width: '534px',
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
          left: '745px',
          top: '737px',
          width: '412px',
          height: '75px',
        }"
      >
        <timer />
      </div>

    <!-- Media Box -->
    <media-box
      :style="{
        left: '43px',
        top: '829px',
        width: '665px',
        height: '169px',

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
