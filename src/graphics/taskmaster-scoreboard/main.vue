<template>
  <main>
    <div class="contestant"
         v-for="(contestant, i) in contestantsSorted"
         :key="contestant.uuid"
         :class="{
           'large': contestant.visibleScore === maxScore && maxCount > 2,
           'larger': contestant.visibleScore === maxScore && maxCount === 1,
         }"
         :style="{
           'transform': `translateX(${(275 * i + 30)}px)`,
         }"
    >
      <div class="frame-scaler">
        <div class="frame-container">
          <div class="fill"
               style="background-image: var(--frame-inner-picture)"
               :style="{
                 '--frame-inner-picture': getContestantHeadshot(contestant),
               }"
          >
            <div class="shadow" />
          </div>
          <img src="./assets/frame.png" class="frame">
        </div>
      </div>
      <div class="score-container">
        <img src="./assets/seal.png" class="seal">
        <h1 class="score">{{ contestant.visibleScore }}</h1>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { TaskmasterContestant, TaskMasterContestantList } from '@esa-layouts/types/schemas';
import NodeCGTypes from '@nodecg/types';

@Component
export default class extends Vue {
  @replicantNS.State(
    (s) => s.reps.taskmasterContestantList,
  ) readonly contestants!: TaskMasterContestantList;
  @replicantNS.State(
    (s) => s.reps.assetsTaskmasterParticipantHeadshots,
  ) readonly headshots!: NodeCGTypes.AssetFile[];

  maxScore = -1;
  maxCount = 1;

  contestantsSorted: TaskMasterContestantList = [];

  mounted(): void {
    this.sortContestants();
  }

  sortContestants(): void {
    console.log(this.contestants);

    // copy first because sort mutates
    const tmpArray = [...this.contestants];

    tmpArray.sort((a, b) => {
      if (a.currentScore < b.currentScore) {
        return -1;
      }
      if (a.currentScore > b.currentScore) {
        return 1;
      }
      return 0;
    });

    this.maxScore = tmpArray[tmpArray.length - 1].currentScore;
    this.maxCount = 1;

    // eslint-disable-next-line no-plusplus
    for (let i = tmpArray.length - 1; i > 0; --i) {
      const con = tmpArray[i - 1];

      if (con.currentScore === this.maxScore) {
        // eslint-disable-next-line no-plusplus
        ++this.maxCount;
      }
    }

    this.contestantsSorted = tmpArray;
  }

  getContestantHeadshot(contestant: TaskmasterContestant): string | undefined {
    return this.headshots.find(
      (hs) => hs.name.toLowerCase().startsWith(contestant.name.toLowerCase()),
    )?.url;
  }
}
</script>

<style lang="scss">
* {
  --frame-inner-picture: url('./assets/blank.jpg');
}

html {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-size: 62.5%;
}

html, body {
  width: 100%;
  height: 100%;
  position: fixed;
}

body {
  display: block;

  padding: 0;
  margin: 0;

  font-size: 20px;
  font-size: 2.0rem;

  font-family: sans-serif;

  overflow: hidden;
}

a {
  color: white;
  font-weight: 600;
}

#settings {
  padding: 20px;
  padding: 2rem;

  transition: opacity 0.2s;

  width: 80%;
  max-width: 500px;
  max-width: 50rem;

  color: white;

  position: absolute;

  z-index: 100;
}

#settings-link {
  background-color: rgba(88, 15, 13, 0.8);
  padding: 10px;
  padding: 1rem;
  line-height: 200%;
  height: 200%;
}

.inner-container {
  background-color: rgba(88, 15, 13, 0.8);
  padding: 20px;
  padding: 2rem;
}

.inner-container.invisible {
  display: none;
}

.invisible {
  opacity: 0;
}

.contestant-settings {
  width: 100%;
  height: 72px;
  height: 7.2rem;

  margin-top: -1px;
  margin-top: -0.1rem;

  border: 1px solid rgba(0, 0, 0, 0.6);
  border: 0.1rem solid rgba(0, 0, 0 , 0.6);
}

.contestant-settings * {
  float: right;

  margin-right: 10px;
  margin-right: 1rem;
}

.contestant-settings .img-container {
  height: 72px;
  width: 72px;

  height: 7.2rem;
  width: 7.2rem;

  display: block;

  float: left;
}

.contestant-settings img {
  max-width: 72px;
  max-height: 72px;

  max-width: 7.2rem;
  max-height: 7.2rem;

  display: block;
}

.contestant-settings label {
  line-height: 72px;
  line-height: 7.2rem;
}

.contestant-settings input {
  width: 90px;
  width: 9rem;

  font-size: 30px;
  font-size: 3rem;
  height: 30px;
  height: 3rem;

  padding: 0;
  border: none;

  margin-top: 21px;
  margin-top: 2.1rem;
}

.contestant-settings .delete {
  line-height: 72px;
  line-height: 7.2rem;

  padding: 0 4px;
  padding: 0 0.4rem;

  cursor: pointer;
}

#add {
  text-align: center;
  line-height: 64px;
  line-height: 6.4rem;
}

main {
  width: 1400px;
  height: 413px;

  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;

  -ms-transform-origin: left;
  transform-origin: left;

  display: block;

  overflow: visible;
}

.contestant {
  width: 205px;

  margin: 0 auto;
  position: absolute;

  transition: transform 2s;
}

.contestant img {
  width: 100%;
}

.score-container, .frame-container {
  position: relative;
}

.frame-scaler {
  transition: transform 2s;

  -ms-transform-origin: bottom;
  transform-origin: bottom;
}

.larger {
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}

.large {
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.frame-container {
  filter: drop-shadow(15px 15px 3px rgba(0, 0, 0, 0.4));

  margin-bottom: 25px;
  height: 250px;

  -ms-transform-origin: center;
  transform-origin: center;

  -webkit-animation: rotate 3s ease-in-out alternate infinite;
  animation: rotate 3s ease-in-out alternate infinite;
}

.frame {
  transform: translateZ(0);
}

@keyframes rotate {
  0% {
    transform: rotate(-4deg);
  }

  100% {
    transform: rotate(4deg);
  }
}

.frame-container img {
  position: absolute;
}

.fill {
  top: 33px;
  right: 33px;
  bottom: 33px;
  left: 33px;

  position: absolute;

  background-color: white;
  background-position: center;
  background-size: cover;

  overflow: hidden;
}

.shadow {
  width: 100%;
  height: 100%;
  position: absolute;

  top: 0;
  left: 0;

  box-shadow: inset -5px 5px 7px rgba(0, 0, 0, 0.5);
}

.score-container {
}

.score {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  box-sizing: border-box;

  line-height: 180px;

  text-align: center;
  vertical-align: middle;

  margin: 0;
  padding: 0;
  margin-left: 8px;

  color: white;
  font-family: "veteran_typewriterregular", sans-serif;

  font-size: 84px;

  font-weight: normal;
  font-style: normal;

  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.score-edit {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 92px;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;

  display: none;
}

noscript h1 {
  background-color: white;
}

#file-input {
  display: none;
}

#play-button {
  color: transparent;
  width: 80px;
  width: 8rem;
  height: 80px;
  height: 8rem;

  border-radius: 100%;
  border: 2px solid black;
  border: 0.2rem solid black;

  background: rgba(0, 0, 0, 0.2);

  position: absolute;

  right: 32px;
  right: 3.2rem;
  top: 32px;
  top: 3.2rem;

  cursor: pointer;

  display: none;
}

#play-button::after {
  content: "";

  width: 0;
  height: 0;

  position: absolute;
  top: 50%;
  left: 50%;

  border: 22px solid transparent;
  border-left: 30px solid #fff;
  margin-top: -22px;
  margin-left: -10px;
}

.exit-button {
  position: absolute;
  top: -25px;
  right: -25px;

  border-radius: 50%;
  width: 50px;
  height: 50px;

  font-size: 32px;
}

.locked .exit-button, .locked .add-button {
  display: none;
}

.add-button {
  top: 149.5px;

  position: absolute;
  width: 72px;
  height: 72px;

  border-radius: 50%;

  background: black;
  background: rgba(127, 127, 127, 0.8);
  border: 2px solid black;

  font-size: 50px;
  color: white;

  cursor: pointer;
}
</style>
