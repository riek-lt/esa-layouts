<template>
  <div :class="{ 'has-dash': !!$slots.dash }">
    <div class="dash" v-if="$slots.dash">
      <slot name="dash"/>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'TickerDisplay',
})
export default class extends Vue {}
</script>
