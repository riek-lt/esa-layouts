<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/ds_vertical_addon.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=" "
      :style="{
        left: '930px',
        top: '0px',
        width: '649px',
        height: '487px',
      }"
    />
    <game-capture
      id="GameCapture2"
      class=""
      :style="{
        left: '930px',
        top: '512px',
        width: '649px',
        height: '487px',
      }"
    />

    <!-- Camera Captures -->
    <div
      id="CameraCapture1"
      class="Capture BlockBlue"
      :style="{
        left: '7px',
        top: '273px',
        width: '547px',
        height: '360px',
      }"
    />

    <!-- General Run Info -->
    <div
      class="Fixed FlexColumn  BlockGreen"
      :style="{
        left: '0px',
        top: '622px',
        width: '536px',
        height: '82px',
      }"
    >
      <player />
      <!-- <comm-and-reader /> -->
      </div>

            <!-- Run Game Info/Timer -->
      <div
        class="FlexColumn BlockYellow"
        :style="{
          flex: '1',
          'max-width': '100%',
          left: '0px',
          top: '0px',
          width: '552px',
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
        left: '24px',
        top: '840px',
        width: '528px',
        height: '157px',
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
