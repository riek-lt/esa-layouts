<template>
  <v-app v-if="online">
    <RTMPFeed />
    <hr>
    <v-btn>Save</v-btn>
  </v-app>
  <v-app v-else>
    <p>Disabled for in-person events</p>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Configschema } from '@esa-layouts/types/schemas';
import RTMPFeed from './components/RTMPFeed.vue';

@Component({
  components: {
    RTMPFeed,
  },
})
export default class extends Vue {
  online = (nodecg.bundleConfig as Configschema).event.online;
}
</script>

<style>
html, body {
  height: 500px;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
