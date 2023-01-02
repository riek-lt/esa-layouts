<template>
  <v-app>
    <v-card
      :style="{ 'margin-bottom': '10px' }"
      tile
    >
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="(name, i) in lowerThird.names"
            :key="i"
            inactive
            selectable
          >
            <v-list-item-content>
              {{ name }}
              <v-btn
                :style="{
                    'min-width': '0',
                    'width': '20%',
                  }"
                @click="removeName(name)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div class="d-flex">
      <v-text-field
        v-model="nameEntry"
        label="Enter Name Here"
        hide-details
        filled
        :spellcheck="false"
        :disabled="disable"
      />
      <v-btn
        height="56px"
        :style="{ 'min-width': '0', 'margin-left': '5px' }"
        :disabled="disable"
        @click="add"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </div>
    <v-btn
      :style="{ 'margin-top': '10px' }"
      @click="showLowerThird"
      :disabled="!lowerThird.visible || lowerThird.transitioning || disable">
      Show lower-third
    </v-btn>
    <v-btn
      :style="{ 'margin-top': '10px' }"
      @click="hideLowerThird"
      :disabled="lowerThird.transitioning || disable || lowerThird.visible">
      Hide lower-third
    </v-btn>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { LowerThird } from '@esa-layouts/types/schemas';
import { storeModule } from './store';

// TODO: add settings for auto-hiding
@Component
export default class extends Vue {
  nameEntry = '';
  disable = false;
  @replicantNS.State((s) => s.reps.lowerThird) readonly lowerThird!: LowerThird;
  removeName = storeModule.removeName;

  showLowerThird(): void {
    nodecg.sendMessage('lower-third:show', {
      autoHide: false, showForSecs: 5,
    });
  }

  hideLowerThird(): void {
    nodecg.sendMessage('lower-third:hide');
  }

  async add(): Promise<void> {
    this.disable = true;
    try {
      await nodecg.sendMessage('lower-third:add-name', this.nameEntry);
    } catch (err) {
      // catch
      console.error(err);
    }
    this.disable = false;
    this.nameEntry = '';
  }
  @Watch('lowerThird', { deep: true })
  onLowerThirdChange(newVal: LowerThird, oldVal?: LowerThird): void {
    console.log('LOWER THIRD UPDATE', newVal.transitioning);
  }

  mounted(): void {
    //
  }
}
</script>
