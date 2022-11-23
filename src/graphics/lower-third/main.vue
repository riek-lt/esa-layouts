<template>
  <transition name="lower-third">
    <div class="lower-third" v-if="lowerThird.visible">
      <div class="left">
        <div class="box"/>
      </div>
      <div class="names">
        <p v-for="(name, i) in lowerThird.names"
           :key="i">{{ name }}</p>
      </div>
      <div class="right">
        <div class="box"/>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { LowerThird } from '@esa-layouts/types/schemas';

@Component({
  components: {
    //
  },
})
export default class extends Vue {
  @replicantNS.State((s) => s.reps.lowerThird) readonly lowerThird!: LowerThird;

  created(): void {
    //
  }
}
</script>

<style lang="scss">
@import "~animate.css";

html, body {
  padding: 0;
  margin: 0;
}

* {
  --bsg-color: #cf773b;
  --slide-color: #914e21;
  --bg-start: #303030;
  --bg-end: #212121;

  --dash-left-width: 194px;
}

.lower-third-leave-active {
  animation: backOutDown;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
}

.lower-third-enter-active {
  animation: backInUp;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
}
</style>
