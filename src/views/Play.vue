<template>
  <div class="play">
    <div>{{ upperRange }}</div>
    <router-link to="/">
      <button>戻る</button>
    </router-link>
  </div>
</template>

<script>
import {Numnator} from '../js/numnator';

export default {
  name: 'play',
  data () {
    return {
      upperRange: Number(this.$route.query['upperRange'])
    }
  },
  created : function() {
    this.initialize();
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
};
</script>