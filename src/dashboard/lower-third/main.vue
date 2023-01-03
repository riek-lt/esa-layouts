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
              <div class="d-flex" style="justify-content: space-between">
                <span>{{ name }}</span>
                <v-btn
                  :style="{
                    'min-width': '0',
                    'width': '20%',
                  }"
                  @click="removeName(name)"
                  :disabled="inputsDisabled"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
              <hr>
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
        :disabled="inputsDisabled"
      />
      <v-btn
        height="56px"
        :style="{ 'min-width': '0', 'margin-left': '5px' }"
        :disabled="inputsDisabled"
        @click="add"
      >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </div>
    <div class="d-flex">
      <v-btn
        height="56px"
        :style="{ 'margin-top': '10px', 'margin-left': '5px' }"
        @click="showLowerThird"
        :disabled="lowerThird.transitioning || updatingName || lowerThird.visible">
        Show
      </v-btn>
      <v-btn
        height="56px"
        :style="{ 'margin-top': '10px', 'margin-left': '5px' }"
        @click="hideLowerThird"
        :disabled="lowerThird.transitioning || updatingName || !lowerThird.visible">
        Hide
      </v-btn>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { LowerThird } from '@esa-layouts/types/schemas';
import { storeModule } from './store';

// TODO: add settings for auto-hiding
@Component
export default class extends Vue {
  nameEntry = '';
  updatingName = false;
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

  get inputsDisabled(): boolean {
    return this.lowerThird.visible || this.updatingName;
  }

  async add(): Promise<void> {
    this.updatingName = true;
    try {
      await nodecg.sendMessage('lower-third:add-name', this.nameEntry);
    } catch (err) {
      // catch
    }
    this.updatingName = false;
    this.nameEntry = '';
  }

  mounted(): void {
    //
  }
}
</script>
