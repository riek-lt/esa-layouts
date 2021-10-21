<template>
  <v-app>
    <v-btn
      class="mt-1"
      @click="resetChecks">
      Uncheck all
    </v-btn>
    <h2 class="mt-2">Checklist</h2>
    <ul>
      <li :class="{
        multiselect: true,
        'with-transition': unchecking,
        'multiselect-on': check.checked,
      }" v-for="(check, i) in checks"
          @click.prevent="$event.stopPropagation(); check.checked = !check.checked"
          :key="i">
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
  unchecking = false;
  checks = [
    {
      title: 'Switch to intermission',
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
      title: 'Set Host and Commentators',
      checked: false,
    },
    {
      title: 'Make sure stream(s) are loaded',
      checked: false,
    },
    {
      title: 'Make sure stream(s) are loaded',
      checked: false,
    },
    {
      title: 'Verify Game Layout',
      checked: false,
    },
    {
      title: 'Check if online notifications are off',
      checked: false,
    },
    {
    title: 'Write down end time of previous run (when no scheduler is active)',
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
    this.unchecking = true;

    for (const check of this.checks) {
      check.checked = false;
    }

    setTimeout(() => {
      this.unchecking = false;
    }, 550);
  }
}
</script>
<style scoped>
  ul {
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px !important;
    list-style-type: none;
    column-count: 3;
  }

  .multiselect {
    border: solid 1px #768948;
    overflow: auto;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 4px;
  }

  .with-transition {
    transition: background-color ease-in-out 500ms;
  }

  .multiselect-on {
    color: #ffffff;
    background-color: #06BA63;
  }
</style>
