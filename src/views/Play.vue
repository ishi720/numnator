<template>
  <div class="play">
    <div>
      <div>
        <input type="number" v-model.number="matchParam" min="0" :max="upperRange">
        <button @click="questionMatch()">マッチ</button>
      </div>
      <div>
        <input type="number" v-model.number="orMoreParam" min="0" :max="upperRange">
        <button @click="questionOrMore()">以上</button>
      </div>
      <div>
        <input type="number" v-model.number="orLessParam" min="0" :max="upperRange">
        <button @click="questionOrLess()">以下</button>
      </div>
      <div>
        <input type="number" v-model.number="aboveParam" min="0" :max="upperRange">
        <button @click="questionAbove()">より上</button>
      </div>
      <div>
        <input type="number" v-model.number="belowParam" min="0" :max="upperRange">
        <button @click="questionBelow()">より下</button>
      </div>
      <div>
        <input type="number" v-model.number="dividedParam" min="2" :max="upperRange">
        <button @click="questionDivided()">倍数</button>
      </div>
      <div>
        <input type="number" v-model.number="placeParam1" min="1" :max="upperRangeLength">
        <input type="number" v-model.number="placeParam2" min="0" max="9">
        <button @click="questionPlace()">位</button>
      </div>
      <div>
        <button @click="questionPrimeNumber()">素数</button>
      </div>
      <div>
        <input type="number" v-model.number="containsCharaParam" min="0" max="9">
        <button @click="questionContainsChara()">文字を含む</button>
      </div>
      <div>
        <input type="number" v-model.number="numberOfDigitsParam" min="1" :max="upperRangeLength">
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
      upperRangeLength: this.$route.query['upperRange'].length,
      liarDegree: Number(this.$route.query['liarDegree']),
      Numnator: "",
      matchParam: 0,
      orMoreParam: 0,
      orLessParam: 0,
      aboveParam: 0,
      belowParam: 0,
      dividedParam: 2,
      placeParam1: 1,
      placeParam2: 0,
      containsCharaParam: 0,
      numberOfDigitsParam: 1
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
      this.Numnator = new Numnator(this.upperRange,this.liarDegree);
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