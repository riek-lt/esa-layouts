<template>
  <div class="Flex runInfoRoot">
    <div
      v-show="runData"
      class="FlexColumn runDataContainer has-side-lines"
      :style="{
      'border-right': lineRight ? '5px solid var(--slide-color)' : '5px solid rgba(0,0,0,0)',
      'border-left': lineLeft ? '5px solid var(--slide-color)' : '5px solid rgba(0,0,0,0)',
      'line-height': lineHeight || 'unset',
    }"
    >
      <canvas :width="canvasWidth" :height="canvasHeight" ref="runInfo"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from 'vue-property-decorator'; // eslint-disable-line object-curly-newline, max-len
import { State } from 'vuex-class';
import { RunDataActiveRun } from 'speedcontrol-util/types';

/* eslint-disable no-param-reassign */
@Component
export default class extends Vue {
  @State('runDataActiveRun') runData!: RunDataActiveRun;
  @Prop(Boolean) readonly noWrap!: boolean;
  @Prop(Boolean) readonly infoIsRow!: boolean;
  @Prop({ type: Number }) readonly width!: number;
  @Prop({ type: Number }) readonly height!: number;
  @Prop({ type: String, default: 'center' }) readonly textAlign!: CanvasTextAlign;
  @Prop({ type: Boolean, default: false }) lineLeft!: string;
  @Prop({ type: Boolean, default: false }) lineRight!: string;
  @Ref('runInfo') canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  lineHeight: string | null = null;

  get gameNameUpper(): string {
    return this.runData?.game?.toUpperCase() ?? 'N/A';
  }

  get canvasWidth(): number {
    return this.width - 14;
  }

  get canvasHeight(): number {
    return this.height - 14;
  }

  setupMainFont(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'white';
    ctx.font = '23px Goodlight';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.textAlign = this.textAlign;
  }

  drawMainText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number | undefined) {
    // Draw the background shadow first
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    this.setupMainFont(ctx);
    // y = font size in px
    ctx.fillText(text, x, y, maxWidth);

    // Then draw the orange shadow
    ctx.shadowBlur = 0;
    ctx.shadowColor = '#cf773b';
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    // y = font size in px
    ctx.fillText(text, x, y, maxWidth);
  }

  printAtWordWrap(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    lineHeight: number,
    fitWidth: number | undefined,
  ) {
    const lineWidth = fitWidth || 0;

    if (lineWidth <= 0) {
      // context.fillText( text, x, y );
      this.drawMainText(context, text, x, y, undefined);
      return;
    }
    let words = text.split(' ');
    let currentLine = 0;
    let idx = 1;

    while (words.length > 0 && idx <= words.length) {
      const str = words.slice(0, idx).join(' ');
      const w = context.measureText(str).width;

      if (w >= lineWidth) {
        if (idx === 1) {
          idx = 2;
        }

        this.drawMainText(context, words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine), lineWidth);
        // context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
        currentLine += 1;
        words = words.splice(idx - 1);
        idx = 1;
      } else {
        idx += 1;
      }
    }

    if (idx > 0) {
      // context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
      this.drawMainText(context, words.join(' '), x, y + (lineHeight * currentLine), fitWidth);
    }
  }

  fit(): void {
    this.context.fillStyle = '#404040';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const gameName = this.runData?.game;

    if (gameName) {
      this.printAtWordWrap(this.context, gameName, 10, 40, 40, this.canvas.width);
    }
  }

  async mounted(): Promise<void> {
    this.context = this.canvas.getContext('2d')!;
    await Vue.nextTick();
    this.fit();
  }

  destroyed(): void {
    //
  }

  get textAlignCss(): string {
    return this.textAlign === 'center' ? 'center' : 'left';
  }

  get cssPositionProps() {
    return {
      '--prop-text-align': this.textAlignCss,
      '--prop-justify-content': this.textAlign,
    };
  }

  @Watch('runData', { deep: true })
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
.runInfoRoot {
  height: 100%;
  width: 100%;
  justify-content: center;
  font-weight: 300;
  font-family: Goodlight;
}

.runDataContainer {
  box-sizing: border-box;
  //padding: 5px 20px;
  padding: 8px;
  justify-content: flex-start;
}

.RunGameParent {
  flex: 0 1 auto;
  /* The above is shorthand for:
   flex-grow: 0,
   flex-shrink: 1,
   flex-basis: auto
  */
  width: 100%;
  position: relative;
  display: block;
  //overflow: hidden;
  height: auto;
  max-height: 85%;
  white-space: unset !important;
  font-size: 50pt;
  text-align: var(--prop-text-align);
  justify-content: var(--prop-justify-content);
  align-items: var(--prop-justify-content);
  //background: rebeccapurple;
}

.RunGame {
  display: inline-flex;
  font-family: Goodlight;
  font-weight: 600;
  margin-top: 10px;
  position: relative;
  text-shadow: 0.1em 0.05em 0px var(--bsg-color), 0.1em 0.15em 3px rgba(0, 0, 0, 0.5);
  //font-size: 3em;
}

.runInfoExtraContainer {
  flex: 1 1 auto;
  width: 100%;
  //height: 100%;
  height: auto;
  font-size: 20pt;
  align-items: baseline;
  //background-color: orange;
  text-align: var(--prop-text-align);
  justify-content: var(--prop-justify-content);
}

.system {
  text-transform: uppercase;
}

.systemEst {
  //align-self: flex-start;
  // Is this cheating and wrong? Probably, don't care tho
  margin-top: -6px;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  display: inline-flex;
  font-family: Corbel-Bold;
}

.catEstBlock {
  display: inline-flex;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  //align-self: flex-start;
  //margin-bottom: 15px;
}

.RunInfoExtra {
  display: flex !important;
  justify-content: space-between;
  align-content: flex-start;
  margin-top: 5px;
  font-size: 1em;
  height: 100%;
  width: 99%;
  font-weight: 300;
  font-family: Goodlight;
  text-align: var(--prop-text-align);

  //span {
  //  display: inline-block !important;
  //}

  &> .catEstBlock > span:not(:last-child)::after {
    content: ' | ';
    color: var(--text-color);
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
  }

  &> .systemEst > span:not(:last-child)::after {
    content: ' | ';
    color: var(--bsg-color);
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
  }
}

.categoryEst {
  text-transform: uppercase;
  color: var(--bsg-color);
  font-size: 1rem;
  white-space: normal;
}
</style>
