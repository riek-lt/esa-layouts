<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/DS_Stack_2_Race.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=" BlockRed"
      :slot-no="0"
      :style="{
        left: '0px',
        top: '0px',
        width: '661px',
        height: '496px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="0"
      class=" BlockRed"
      finish-time-pos="bottomright"
      :style="{
        left: '0px',
        top: '504px',
        width: '661px',
        height: '496px',
      }"
    />
    <game-capture
      id="GameCapture1"
      class="BlockRed"
      :slot-no="1"
      :style="{
        left: '1260px',
        top: '0px',
        width: '661px',
        height: '496px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="1"
      class=" BlockRed"
      finish-time-pos="bottomright"
      :style="{
        left: '1260px',
        top: '504px',
        width: '661px',
        height: '496px',
      }"
    />

    <!-- Camera Captures -->
    <!-- Online has 2 camera spots -->
    <div
      v-if="!online"
      id="CameraCapture1"
      class="Capture"
      :style="{
      left: '686px',
      top: '600px',
      width: '547px',
      height: '396px',
      }"
    />
    <template v-else>
      <div
        id="CameraCapture1"
        class="Capture"
        :style="{
          left: '711px',
          top: '720px',
          width: '249px',
          height: '280px',
        }"
      />
      <div
        id="CameraCapture2"
        class="Capture"
        :style="{
          left: '960px',
          top: '720px',
          width: '249px',
          height: '280px',
        }"
      />
    </template>

    <!-- Player 1/Commentator -->
    <div
      class="Fixed"
      :style="{
      left: '678px',
      top: '304px',
      width: '493px',
      height: '85px'
      }"
    >
      <player :slot-no="0" />
      <!--<comm-and-reader />-->
    </div>

    <!-- Player 2/General Run Info -->
    <div
      class="Fixed FlexColumn"
      :style="{
      left: '750px',
      top: '411px',
      width: '493px',
      height: '85px'
      }"
    >
      <player :slot-no="1" />

      <!-- Run Game Info/Timer -->
      <div
      class="Fixed Flex BlockYellow"
      :style="{
        flex: '1',
        width: '100%',
        left: '677px',
        top: '0px',
        width: '492px',
        height: '283px',
        }"
      >
        <run-info :style="{ 'font-size': '35px' }" />
      </div>
      <div
  class="Fixed FlexColumn BlockBlack"
  :style="{
    flex: '1',
    width: '100%',
    left: '696px',
    top: '526px',
    width: '528px',
    height: '108px',
  }"
>
  <timer />
</div>
    </div>

    <!-- Media Box -->

    <!-- Donation Bar -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Configschema } from '@esa-layouts/types/schemas/configschema';
import MediaBox from '@shared/graphics/mediabox';
import GameCapture from './components/GameCapture.vue';
import Player from './components/Player.vue';
import CommAndReader from './components/CommAndReader.vue';
import RunInfo from './components/RunInfo.vue';
import Timer from './components/Timer.vue';
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
export default class extends Vue {
  online = (nodecg.bundleConfig as Configschema).event.online;
}
</script>
