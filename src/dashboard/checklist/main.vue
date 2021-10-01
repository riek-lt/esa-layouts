<template>
  <v-app>
    <v-btn
      class="mt-1"
      @click="resetChecks">
      Uncheck all
    </v-btn>
    <h2>Checklist</h2>
    <ul>
      <li v-for="(check, i) in checks" :key="i">
        <input :id="`checkbox-${i}`" type="checkbox" v-model="check.checked">
        <label :for="`checkbox-${i}`">{{ check.title }}</label>
      </li>
    </ul>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
  checks = [
    {
      title: 'Switch to intermission OR video player',
      checked: false,
    },
    {
      title: 'Play ads on BSG Channel',
      checked: false,
    },
    {
      title: 'Press Next Game in Run Player',
      checked: false,
    },
    {
      title: '',
      checked: false,
    },
    {
      title: '',
      checked: false,
    },
    {
      title: '',
      checked: false,
    },
    {
      title: '',
      checked: false,
    },
    {
      title: '',
      checked: false,
    },
  ];

  resetChecks(): void {
    for (const check of this.checks) {
      check.checked = false;
    }
  }
}
</script>
