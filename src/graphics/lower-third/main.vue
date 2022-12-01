<template>
  <transition name="lower-third">
    <div class="lower-third" v-if="lowerThird.visible">
      <div class="left">
        <div class="box"/>
      </div>
      <transition name="fade" v-if="showNames">
        <div class="names">
          <p v-for="(name, i) in lowerThird.names"
             :key="i">{{ name }}</p>
        </div>
      </transition>
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
  showNames = true;

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

.lower-third {
  display: flex;
  position: fixed;

  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    background: green;
  }

  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    background: green;
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
