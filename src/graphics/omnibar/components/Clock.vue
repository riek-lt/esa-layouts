<template>
  <div
    class="Clock"
    :style="{
      width: '100%',
      height: '100%',
    }"
  >
    <span>{{ time }}</span>
    <span>{{ date }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);

@Component
export default class extends Vue {
  time = '00:00';
  date = '00/00/0000';

  setTime(): void {
    const timer = dayjs().tz('Europe/Amsterdam');

    this.time = timer.format('HH:mm').trim();
    this.date = timer.format('DD/MM/YYYY').trim();
  }

  created(): void {
    this.setTime();
    setInterval(() => { this.setTime(); }, 1000);
  }
}
</script>

<style scoped lang="scss">
.Clock {
  position: relative;
  left: -15px;
  text-align: center;
  padding-top: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Bahnschrift';

  span:first-child {
    font-size: 40px;
  }

  span:nth-child(2) {
    font-size: 20px;
  }
}
</style>
