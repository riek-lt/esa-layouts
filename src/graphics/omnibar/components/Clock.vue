<template>
  <div
    class="Clock"
    :style="{
      width: '100%',
      height: '100%',
    }"
  >
    <span style="font-size: 30px;">{{ time }}</span>
    <span style="font-size: 14px;">{{ date }}</span>
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

<!-- TODO: move this to correct style sheet -->
<style scoped>
.Clock {
  padding-top: 5px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
  font-family: 'Goodlight'
}
</style>
