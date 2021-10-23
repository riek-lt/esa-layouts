<template>
  <v-app>
    <v-btn
      class="mt-1"
      @click="sendUncheckAll">
      Uncheck all
    </v-btn>
    <h2 class="mt-2">Checklist</h2>
    <ul>
      <li :class="{
        multiselect: true,
        'with-transition': unchecking,
        'multiselect-on': check.checked,
      }" v-for="(check, i) in checks"
          @click.prevent="$event.stopPropagation(); setChecked(i, !check.checked)"
          :key="i">
        <input :id="`checkbox-${i}`" type="checkbox" v-model="check.checked">
        <label :for="`checkbox-${i}`">{{ check.title }}</label>
      </li>
    </ul>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {Configschema} from '../../types/schemas';

@Component
export default class extends Vue {
  obsConfig = (nodecg.bundleConfig as Configschema).obs;
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
      title: 'Verify run info is correct',
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

  mounted(): void {
    nodecg.listenFor('obsChangeScene', ({ scene }) => {
      // reset the checkmarks if we change to the game layout
      if (scene === this.obsConfig.names.scenes.gameLayout) {
        this.resetChecks();
      }
    });

    nodecg.listenFor('changeCheckStatus', ({ i, checked }) => {
      this.checks[i].checked = checked;
    });
    nodecg.listenFor('changeCheckUncheckAll', () => {
      this.resetChecks();
    });
  }

  setChecked(index: number, checked: boolean): void {
    nodecg.sendMessage('changeCheckStatus', {
      i: index,
      checked,
    });
  }

  sendUncheckAll(): void {
    nodecg.sendMessage('changeCheckUncheckAll');
  }

  resetChecks(): void {
    if (this.unchecking) {
      return;
    }

    // Skip if nothing is checked
    if (!this.checks.find((c) => c.checked)) {
      return;
    }

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
