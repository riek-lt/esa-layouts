<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/widescreen_2_bg.png)`,
'background-repeat': 'no-repeat'}
">
    <!-- Game Captures -->
    <game-capture
      id="GameCapture1"
      class=""
      :slot-no="0"
      :style="{
      left: '0px',
      top: '74px',
      width: '955px',
      height: '540px',
      }"
    />
    <game-capture
      id="GameCapture2"
      :slot-no="1"
      finish-time-pos="bottomright"
      :style="{
      left: '965px',
      top: '74px',
      width: '955px',
      height: '540px',
      }"
    />

    <!-- Camera Captures -->
    <!-- Online has 2 camera spots -->
    <div
      v-if="!online"
      id="CameraCapture1"
      class="Capture"
      :style="{
      left: '726px',
      top: '734px',
      width: '468px',
      height: '266px',
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
      left: '189px',
      top: '648px',
      width: '520px',
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
      left: '1209px',
      top: '632px',
      width: '520px',
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
        left: '1213px',
        top: '727px',
        width: '534px',
        height: '270px',
        }"
      >
        <run-info :style="{ 'font-size': '35px' }" />
      </div>
      <div
  class="Fixed FlexColumn BlockBlack"
  :style="{
    flex: '1',
    width: '100%',
    left: '745px',
    top: '636px',
    width: '412px',
    height: '69px',
  }"
>
  <timer />
</div>
    </div>

    <!-- Media Box -->
    <media-box
      :font-size="20"
      :style="{
      left: '43px',
      top: '729px',
      width: '665px',
      height: '269px',
      }"
    />

    <!-- Donation Bar -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Configschema } from '@esa-layouts/types/schemas/configschema';
import MediaBox from '@esamarathon/esa-layouts-shared/mediabox/graphics';
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
