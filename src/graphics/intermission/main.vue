<template>
<div id="Intermission" :style="{
'background-repeat': 'no-repeat'}
">
    <div
      id="Background"
      :style="{ 'clip-path': clipPath }"
    />
    <div id="Layout">
      <!-- Logo  linksboven-->
      <div
        class="Logo Fixed"
        :style="{
          left: '53px',
          top: '43px',
          width: '609px',
          height: '276px',
        }"
      >
      </div>

      <!-- Commercial Timer -->
      <commercial-timer
        :style="{
          left: '1116px',
          top: '993px',
          width: '655px',
          height: '35px',
        }"
      />

      <!-- Media Box linksonder -->
      <media-box
        :style="{
          left: '983px',
          top: '83px',
          width: '402px',
          height: '399px',
        }"
      />

      <!-- Upcoming Run -->
      <upcoming-run
        class="Fixed"
        :run-data="nextRuns[0]"
        :style="{
          left: '138px',
          top: '100px',
          width: '672px',
          height: '294px',
        }"
      />

      <!-- Rotation meer upcoming runs -->
      <rotation
        :style="{
          left: '138px',
          top: '393px',
          width: '667px',
          height: '652px',
        }"
      />

      <!-- Donation Reader and Music Track -->
      <div
        class="Fixed FlexI"
        :style="{
          left: '1110px',
          top: '802px',
          width: '672px',
          height: '60px',
          'justify-content': 'flex-start',
          'font-size': '30px',
        }"
      >
        <donation-reader />
        <!--<music-track />-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RunData } from 'speedcontrol-util/types';
// import { generateClipPath } from '../_misc/cut-background';
import MediaBox from '../_misc/components/MediaBox.vue';
import CommercialTimer from './components/CommercialTimer.vue';
import UpcomingRun from './components/UpcomingRun.vue';
import Rotation from './components/Rotation.vue';
import DonationReader from './components/DonationReader.vue';
import MusicTrack from './components/MusicTrack.vue';

@Component({
  components: {
    MediaBox,
    CommercialTimer,
    UpcomingRun,
    Rotation,
    DonationReader,
    MusicTrack,
  },
})
export default class extends Vue {
  @State nextRuns!: RunData[];
  clipPath = 'unset';

  mounted(): void {
    // Bring this back if we actually gain some cameras on this layout.
    // this.clipPath = generateClipPath();
  }
}
</script>
