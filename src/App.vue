<template>
  <div id="app">
    This is vue project template.
    <SampleComponent message="Sample Message" />
    <VuexSampleComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { SampleComponent } from './components/sample';
import { VuexSampleComponent } from './components/vuex-sample';

@Component({
  components: {
    SampleComponent,
    VuexSampleComponent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
