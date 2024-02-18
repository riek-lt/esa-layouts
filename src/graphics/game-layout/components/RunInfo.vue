<template>
  <div
    v-show="runData"
    ref="RunInfo"
    class="FlexColumn"
    :style="{
      'font-size': '36pt',
      'font-family': 'Goodlight',
      width: '100%',
      'text-align': 'left',
      padding: '5px 20px',
      'box-sizing': 'border-box',
      'height': '100%',
      'line-height': lineHeight || 'unset',
      'white-space': 'normal',
    }"
  >
    <div
      class="Flex"
      :style="{
      width: '100%',
      height: '75px',
      'text-align': 'center',
      position: 'relative',
      'justify-content': 'center',
      'align-items': 'center',
    }">
      <div
        v-show="runData && runData.game"
        class="RunGame"
        :style="{
        'font-family': 'Goodlight',
        'font-size': '20px',
        'font-weight': 600,
        'line-height': 1.5,
        display: 'flex',
        'max-width': '100%',
        'padding-top': '12px',
      }">
        <template v-if="runData && runData.game">
          {{ runData.game }}
        </template>
      </div>
    </div>

    <div
      class="Flex"
      :style="{
      width: '100%',
      height: '100%',
      'font-size': '55pt',
      'text-align': 'center',
      'justify-content': 'center',
      'align-items': 'baseline',
    }">
      <div
        v-show="runData && (runData.category || runData.system || runData.estimate)"
        class="FlexColumn RunInfoExtra"
        :style="{
          height: '100%',
          'font-size': '2em', // Also gets set in the script, here as backup.
          'text-align': 'center',
          'font-family': 'Goodlight-light',
        }"
      >
        <template v-if="runData">
          <span class="systemEst">
            <span v-if="runData.system" class="system">{{ runData.system }}</span>
            <span v-if="runData.release" class="release">{{ runData.release }}</span>
          </span>
          <div class="catEstBlock">
            <span v-if="runData.category" class="categoryEst" :style="{
                      color: 'var(--bsg-color)',
                      'font-size': '21pt',
                      'white-space': 'normal',
                      'margin-right': '5px',
                }">{{ runData.category }}</span>
              <span v-if="runData.estimate" class="categoryEst" :style="{
                color: 'var(--bsg-color)',
                      'font-size': '21pt',
                      'white-space': 'normal',
                }">{{ runData.estimate }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'; // eslint-disable-line object-curly-newline, max-len
import { State } from 'vuex-class';
import { RunDataActiveRun } from 'speedcontrol-util/types';
import fitty, { FittyInstance } from 'fitty';

@Component
export default class extends Vue {
  @State('runDataActiveRun') runData!: RunDataActiveRun;
  @Prop(Boolean) readonly noWrap!: boolean;
  lineHeight: string | null = null;
  fittyGame: FittyInstance | undefined;
  fittyInfoExtra: FittyInstance | undefined;

  get hek(): boolean {
    return this.runData?.customData.info === 'HEK';
  }

  fit(): void {
    const elem = this.$refs.RunInfo as HTMLElement;
    if (elem) {
      if (!this.noWrap) {
        [this.fittyGame] = fitty('.RunGame', {
          minSize: 1,
          maxSize: parseInt(elem.style.fontSize, 10) * 1.5,
        });
        [this.fittyInfoExtra] = fitty('.RunInfoExtra', {
          minSize: 1,
          maxSize: parseInt(elem.style.fontSize, 10) * 0.9,
        });
      } else {
        // If there is no horizontal fitting, will crudely attempt to
        // reduce line height if needed, just in case.
        const scale = elem.clientHeight / elem.scrollHeight;
        if (scale < 1) {
          this.lineHeight = `${(scale - 0.1) * 100}%`;
        } else {
          this.lineHeight = null;
        }
      }
    }
  }

  mounted(): void {
    this.fit();
  }

  destroyed(): void {
    if (this.fittyGame) {
      this.fittyGame.unsubscribe();
    }
    if (this.fittyInfoExtra) {
      this.fittyInfoExtra.unsubscribe();
    }
  }

  @Watch('runData')
  async onRunDataChange(newVal: RunDataActiveRun, oldVal?: RunDataActiveRun): Promise<void> {
    // Re-fit the elements if run data becomes definded (as elements do no exist before this).
    if ((newVal && !oldVal) || this.noWrap) {
      this.lineHeight = null;
    }

    await Vue.nextTick();
    this.fit();
  }
}
</script>

<style scoped lang="scss">
.RunGame {
  margin-top: 10px;
  position: relative;
  text-align: center !important;
  text-shadow: 5px 5px 0px var(--bsg-color);
  text-transform: uppercase;
  white-space: unset !important;
}

.catEstBlock {
  display: inline-flex;
  align-self: flex-end;
  margin-bottom: 15px;
}

.RunInfoExtra {
  display: flex !important;
  justify-content: space-between;
  align-content: space-between;
  margin-top: 5px;

  span {
    display: inline-block !important;
  }

  &> .catEstBlock > span:not(:last-child)::after {
    content: ' | ';
  }

  &> .systemEst > span:not(:last-child)::after {
    content: ' - ';
  }
}

.categoryEst {
  text-transform: uppercase;
}
</style>
