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
      upperRange: 100
    };
  },
  methods: {
    initialize() {
      this.Numnator = new Numnator(this.upperRange);
    },
    questionOrMore(x) {
      this.Numnator.questionOrMore(x);
    },
    questionOrLess(x) {
      this.Numnator.questionOrLess(x);
    },
    questionAbove(x) {
      this.Numnator.questionAbove(x);
    },
    questionBelow(x) {
      this.Numnator.questionBelow(x);
    },
    questionDivided(x) {
      this.Numnator.questionDivided(x);
    },
    questionPlace(p,x) {
      this.Numnator.questionPlace(p,x);
    },
    questionPrimeNumber() {
      this.Numnator.questionPrimeNumber();
    },
    questionContainsChara(x) {
      this.Numnator.questionContainsChara(x);
    }
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
