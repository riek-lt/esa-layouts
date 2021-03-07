<template>
<div :style="{ 'backgroundImage': `url(bsgbacks/widescreen_2_bg-c.png)`,
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
      class="Capture   "
      :style="{
        left: '726px',
        top: '734px',
        width: '468px',
        height: '266px',
      }"
    />


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
        <span :style="{ 'font-weight': 600, 'padding-right': '5px' }">
        </span>
        <template v-for="({ name, pronouns }, i) in extraPlayers">
          <span :key="name">{{ name }}</span>
          <span
            v-if="pronouns"
            :key="name"
            class="Pronouns"
            :style="{
              padding: '1px 3px',
              'margin-left': '4px',
              'background-color': '#4b3163',
            }"
          >
            {{ pronouns }}
          </span><span
            v-if="i < extraPlayers.length - 1"
            :key="name"
          >,&nbsp;</span>
        </template>
      </div>

      <!--TIMER-->
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

    <!-- Media Box -->
    <media-box
      :font-size="40"
      :style="{
        left: '0px',
        top: '630px',
        width: '660px',
        height: '310px',
      }"
    />

    <!-- Donation Bar -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Configschema } from '@/types/schemas/configschema';
import { State } from 'vuex-class';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import GameCapture from './components/GameCapture.vue';
import Player from './components/Player.vue';
import CommAndReader from './components/CommAndReader.vue';
import RunInfo from './components/RunInfo.vue';
import Timer from './components/Timer.vue';
import MediaBox from '../_misc/components/MediaBox.vue';
import DonationBar from './components/DonationBar.vue';
import { formatPronouns } from '../_misc/helpers';

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
  @State('runDataActiveRun') runData!: RunDataActiveRun;

  get extraPlayers(): { name: string, pronouns?: string }[] {
    return (this.runData?.teams[0].players || []).slice(2).map((p) => ({
      name: p.name,
      pronouns: this.formatPronouns(p.pronouns),
    }));
  }

  formatPronouns(pronouns?: string): string | undefined {
    return formatPronouns(pronouns);
  }
}
</script>
