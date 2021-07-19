<template>
  <div class="play">
    
    <div>
      <button @click="questionMatch(10)">マッチ</button>
      <button @click="questionOrMore(50)">以上</button>
      <button @click="questionOrLess(15)">以下</button>
      <button @click="questionAbove(20)">より上</button>
      <button @click="questionBelow(55)">より下</button>
      <button @click="questionDivided(3)">倍数</button>
      <button @click="questionPlace(10,2)">位</button>
      <button @click="questionPrimeNumber()">素数</button>
      <button @click="questionContainsChara(5)">文字を含む</button>
      <button @click="questionNumberOfDigits(1)">桁数</button>
    </div>
    <div>
      <router-link to="/">
        <button>戻る</button>
      </router-link>
    </div>
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
    questionMatch(x) {
      this.Numnator.questionMatch(x);
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
    },
    questionNumberOfDigits(x) {
      this.Numnator.questionNumberOfDigits(x);
    }
  }
};
</script>