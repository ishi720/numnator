<template>
  <div id="app">
    <input type="number" v-model.number="upperRange">
    <button @click="initialize">Start</button>
  </div>
</template>

<script>
import {Numnator} from './js/numnator';

export default {
  name: 'app',
  data () {
    return {
      upperRange: 100,
    }
  },
  methods: {
    initialize() {
      this.Numnator = new Numnator(this.upperRange);
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
