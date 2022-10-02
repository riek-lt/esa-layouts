<template>
  <v-app>
    <v-simple-table>
      <template #default> <!-- v-slot:default -->
        <thead>
          <tr>
            <th class="text-left text-muted">
              output/input
            </th>
            <th v-for="capture in gameCaptures"
                :key="capture"
                class="text-left">
              {{ capture }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(source, si) in gameSources"
              :key="source">
            <td class="text--lighten-5">{{ source }}</td>
            <td v-for="i in gameCaptures.length" :key="i">
              <input type="radio"
                     v-model="selectedCaptures[si]"
                     :value="i - 1">
              <!--<v-radio
                v-model="selectedCaptures[si]"
                :value="`${i}-${si}`"/> <! -- `${gameCaptureIndex}-${gameSourceIndex}` -->
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Configschema } from '../../types/schemas';

@Component
export default class extends Vue {
  obsConfig = (nodecg.bundleConfig as Configschema).obs;
  gameCaptures: string[] = [];
  selectedCaptures: number[] = [];

  async mounted(): Promise<void> {
    // Only compute on startup for performance reasons :)
    this.gameCaptures = this.computeGameCaptures();

    nodecg.listenFor('gameSourceVisibilityUpdated', (data: number[]) => {
      this.selectedCaptures = data;
    });

    // load initial settings
    this.selectedCaptures = await nodecg.sendMessage('getGameSourceVisibility');
  }

  computeGameCaptures(): string[] {
    const captures = this.obsConfig.names.groups.gameCaptures;

    if (Array.isArray(captures)) {
      return captures;
    }

    return [captures];
  }

  get gameSources(): string[] {
    const sources = this.obsConfig.names.sources.gameSources;

    if (Array.isArray(sources)) {
      return sources;
    }

    return [sources];
  }

  @Watch('selectedCaptures')
  onSelectedCapturesChanged(newVal: number[]): void {
    // We're using a different event here to prevent loops.
    nodecg.sendMessage('setSelectedCaptures', newVal); // TODO: await?
  }
}
</script>
<style scoped>
.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: #1e1e1e !important;
}
</style>
