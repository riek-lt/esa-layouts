<template>
  <v-app>
    <RTMPFeed />
    <hr>
    <v-btn>Save</v-btn>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RTMPFeed from './components/RTMPFeed.vue';

@Component({
  components: {
    RTMPFeed,
  },
})
export default class extends Vue {}
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
