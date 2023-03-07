<template>
  <div>
    <v-checkbox
      v-model="enabled"
      label="Feed 1"
    />
    <v-row>
      <v-col cols="5">
        <v-select
          :disabled="!enabled"
          v-model="select"
          label="Instance"
          item-text="name"
          item-value="prefix"
          :items="instances"
          persistent-hint
          return-object
          single-line
        />
      </v-col>
      <v-col>
        <v-text-field label="Stream key" filled :disabled="!enabled" />
      </v-col>
    </v-row>
    <v-text-field :value="`rtmp://${select.prefix}.bsgmarathon.com/live`" readonly filled :disabled="!enabled" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const instances = [
      {
        prefix: 'eu',
        name: 'Europe',
      },
      {
        prefix: 'na',
        name: 'North-America',
      },
    ];

    const select = ref(instances[1]);

    return {
      instances,
      select,
    };
  },
  data: () => ({
    enabled: true,
  }),
});
</script>
