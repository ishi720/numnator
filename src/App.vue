<template>
  <div id="app">
    <HeaderItem />

    <input type="number" v-model.number="upperRange">
    <button @click="initialize">Start</button>

    
    <router-link to="/">Home</router-link> |
    <router-link to="/Play">play</router-link>

    <router-view/>

  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue';
import {Numnator} from './js/numnator';

export default {
  name: 'app',
  data () {
    return {
      upperRange: 100
    };
  },
  components: {
    HeaderItem
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
body {
  margin: 0;
  background-color: #f2f4f6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*
  #1ee3cf;
  #6b48ff;
  */
}
</style>
