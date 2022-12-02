<template>
  <transition name="lower-third">
    <div class="lower-third" v-if="lowerThird.visible">
      <div class="left">
        <div class="box"/>
      </div>
      <transition name="fade" v-if="showNames">
        <div class="names">
          <span v-for="(name, i) in lowerThird.names"
             :key="i">{{ name }}</span>
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
    // TODO: figure out how the transition thing works
    /*setInterval(() => {
      this.showNames = !this.showNames;
    }, 5000);*/
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
  --lt-height: 50px;
}

.box {
  z-index: 99;
}

.lower-third {
  display: flex;
  position: fixed;
  width: 90%;
  margin-left: 5%;
  height: var(--lt-height);

  bottom: 150px;

  animation-timing-function: ease-in-out;

  background: linear-gradient(180deg, var(--bg-start) 0%, var(--bg-end) 100%);

  .left {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: var(--lt-height);
    background: green;
  }

  .names {
    position: relative;
    display: flex;
    align-content: space-around;
    justify-content: space-evenly;
    align-items: baseline;
    color: white;
    font-size: 26px;
    width: 100%;
    padding-top: 5px;
    // top: calc((82px - 50px) / 2);
    animation-duration: 500ms;

    z-index: 1;

    p {
      flex-grow: 0;
      align-self: center;
    }

    &.show {
      opacity: 1;
      animation: fadeInUp;
      animation-duration: 500ms;
    }

    &.hide {
      display: none;
    }
  }

  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: var(--lt-height);
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
