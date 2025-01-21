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
    ctx.textBaseline = 'ideographic';
    ctx.textAlign = this.textAlign;
  }

  // TODO: have a look at the mltext.js library
  //  It might be better
  drawMainText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number | undefined) {
    // Draw the background shadow first
    ctx.shadowBlur = 3;
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;

    this.setupMainFont(ctx);
    // y = font size in px
    ctx.fillText(text, x, y, maxWidth);

    // Then draw the orange shadow
    ctx.shadowBlur = 0;
    ctx.shadowColor = '#cf773b';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 3;
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

        const strToDraw = words.slice(0, idx - 1).join(' ').trim();
        this.drawMainText(context, strToDraw, x, y + (lineHeight * currentLine), lineWidth);
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
      this.drawMainText(context, words.join(' '), x, y + (lineHeight * currentLine), lineWidth);
    }
  }

  drawConsole(system: string): void {
    // reset shadow
    this.context.shadowBlur = 0;
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;

    this.context.fillStyle = 'white';
    this.context.font = '15pt Corbel-Bold';
    this.context.textAlign = this.textAlign;
    this.context.textBaseline = 'bottom';

    this.context.fillText(system, 5, (this.canvas.height / 2) + 33, this.canvas.width - 10);
  }

  drawCategoryEstimate(category: string, estimate: string): void {
    // reset shadow
    this.context.shadowBlur = 0;
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;

    this.context.fillStyle = '#cf773b';
    this.context.font = '15pt Goodlight';
    this.context.textAlign = this.textAlign;
    this.context.textBaseline = 'bottom';

    this.context.fillText(`${category} | ${estimate}`, 5, this.canvas.height - 10, this.canvas.width - 10);
  }

  fit(): void {
    this.context.fillStyle = '#404040';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const gameName = this.runData?.game;

    if (gameName) {
      this.printAtWordWrap(this.context, gameName, 5, 40, 40, this.canvas.width - 10);
    }

    const system = this.runData?.system;

    if (system) {
      this.drawConsole(system.toUpperCase());
    }

    const category = this.runData?.category;
    const estimate = this.runData?.estimate;

    if (category && estimate) {
      this.drawCategoryEstimate(category.toUpperCase(), estimate.toUpperCase());
    }
  }

  async mounted(): Promise<void> {
    this.context = this.canvas.getContext('2d')!;
    this.setupMainFont(this.context);
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
  // Ensure the font is loaded
  font-weight: 300;
  font-family: Goodlight;
}

.runDataContainer {
  box-sizing: border-box;
  //padding: 5px 20px;
  //padding: 8px;
  justify-content: flex-start;
}
</style>
