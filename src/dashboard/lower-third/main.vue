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
        label="Enter Name Here"
        hide-details
        filled
        :spellcheck="false"
      />
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { replicantNS } from '@esa-layouts/browser_shared/replicant_store';
import { storeModule } from './store';
import { LowerThird } from '../../types/schemas';

@Component
export default class extends Vue {
  @replicantNS.State((s) => s.reps.lowerThird) readonly lowerThird!: LowerThird;
  removeName = storeModule.removeCommentator;
}
</script>
