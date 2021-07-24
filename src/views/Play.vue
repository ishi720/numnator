<template>
  <div class="play">
    <div>
      <div>
        <input type="number" v-model.number="matchParam">
        <button @click="questionMatch()">マッチ</button>
      </div>
      <div>
        <input type="number" v-model.number="orMoreParam">
        <button @click="questionOrMore()">以上</button>
      </div>
      <div>
        <input type="number" v-model.number="orLessParam">
        <button @click="questionOrLess()">以下</button>
      </div>
      <div>
        <input type="number" v-model.number="aboveParam">
        <button @click="questionAbove()">より上</button>
      </div>
      <div>
        <input type="number" v-model.number="belowParam">
        <button @click="questionBelow(55)">より下</button>
      </div>
      <div>
        <input type="number" v-model.number="dividedParam">
        <button @click="questionDivided()">倍数</button>
      </div>
      <div>
        <input type="number" v-model.number="placeParam1">
        <input type="number" v-model.number="placeParam2">
        <button @click="questionPlace()">位</button>
      </div>
      <div>
        <button @click="questionPrimeNumber()">素数</button>
      </div>
      <div>
        <input type="number" v-model.number="containsCharaParam">
        <button @click="questionContainsChara()">文字を含む</button>
      </div>
      <div>
        <input type="number" v-model.number="numberOfDigitsParam">
        <button @click="questionNumberOfDigits()">桁数</button>
      </div>
    </div>

    <HistoryItem v-bind:history="Numnator.history" />

    <div>
      <router-link to="/">
        <button>戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {Numnator} from '../js/numnator';
import HistoryItem from '../components/HistoryItem.vue';

export default {
  name: 'play',
  data () {
    return {
      upperRange: Number(this.$route.query['upperRange']),
      Numnator: "",
      matchParam: 0,
      orMoreParam: 0,
      orLessParam: 0,
      aboveParam: 0,
      belowParam: 0,
      dividedParam: 0,
      placeParam1: 0,
      placeParam2: 0,
      containsCharaParam: 0,
      numberOfDigitsParam: 0
    }
  },
  components: {
    HistoryItem
  },
  created: function() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.Numnator = new Numnator(this.upperRange);
    },
    questionMatch() {
      this.Numnator.questionMatch(this.matchParam);
    },
    questionOrMore() {
      this.Numnator.questionOrMore(this.orMoreParam);
    },
    questionOrLess() {
      this.Numnator.questionOrLess(this.orLessParam);
    },
    questionAbove() {
      this.Numnator.questionAbove(this.aboveParam);
    },
    questionBelow() {
      this.Numnator.questionBelow(this.belowParam);
    },
    questionDivided() {
      this.Numnator.questionDivided(this.dividedParam);
    },
    questionPlace() {
      this.Numnator.questionPlace(this.placeParam1,this.placeParam2);
    },
    questionPrimeNumber() {
      this.Numnator.questionPrimeNumber();
    },
    questionContainsChara() {
      this.Numnator.questionContainsChara(this.containsCharaParam);
    },
    questionNumberOfDigits() {
      this.Numnator.questionNumberOfDigits(this.numberOfDigitsParam);
    }
  }
};
</script>