<template>
  <v-app>
    <v-btn
      class="mt-1"
      @click="resetChecks">
      Uncheck all
    </v-btn>
    <h2>Checklist</h2>
    <ul class="border">
      <li :class="{
        multiselect: true,
        'multiselect-on': check.checked,
      }" v-for="(check, i) in checks" :key="i">
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
      title: 'Press Next Game in Run Player',
      checked: false,
    },
    {
      title: 'Tweet about the run WITH a picture',
      checked: false,
    },
    {
      title: 'Balance audio with donation reader',
      checked: false,
    },
    {
      title: 'Write down end time of previous run (when no scheduler is active)',
      checked: false,
    },
    {
      title: 'Set Host and Commentators',
      checked: false,
    },
    {
      title: 'Verify Game Layout',
      checked: false,
    },
    {
      title: 'Verify run-info is correct',
      checked: false,
    },
    {
      title: 'Make sure stream(s) are loaded',
      checked: false,
    },
    {
      title: 'Check if online notifications are off',
      checked: false,
    },
    {
      title: 'Stay hydrated',
      checked: false,
    },
    {
      title: 'Final Check',
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
<style>
  .border {
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px;
  }

  .multiselect {
    border: solid 1px #768948;
    overflow: auto;
    padding: 10px;
    border-radius: 5px;
  }

  .multiselect-on {
    color: #ffffff;
    background-color: #06BA63;
  }

  ul {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
  }
</style>
