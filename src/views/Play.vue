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

    <HistoryItem :history="history" />

    <div>
      <router-link to="/">
        <button>戻る</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue';
import {Numnator} from '../js/numnator';
import HistoryItem from '../components/HistoryItem.vue';

export default {
  name: 'play',
  data () {
    return {
      upperRange: Number(this.$route.query['upperRange']),
      upperRangeLength: this.$route.query['upperRange'].length,
      liarDegree: Number(this.$route.query['liarDegree']),
      numnator: null,
      history: [],
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
      // private フィールドを持つクラスは Proxy 化すると動かないため markRaw する
      this.numnator = markRaw(new Numnator(this.upperRange,this.liarDegree));
      this.syncHistory();
    },
    syncHistory() {
      this.history = [...this.numnator.history];
    },
    questionMatch() {
      this.numnator.questionMatch(this.matchParam);
      this.syncHistory();
    },
    questionOrMore() {
      this.numnator.questionOrMore(this.orMoreParam);
      this.syncHistory();
    },
    questionOrLess() {
      this.numnator.questionOrLess(this.orLessParam);
      this.syncHistory();
    },
    questionAbove() {
      this.numnator.questionAbove(this.aboveParam);
      this.syncHistory();
    },
    questionBelow() {
      this.numnator.questionBelow(this.belowParam);
      this.syncHistory();
    },
    questionDivided() {
      this.numnator.questionDivided(this.dividedParam);
      this.syncHistory();
    },
    questionPlace() {
      this.numnator.questionPlace(this.placeParam1,this.placeParam2);
      this.syncHistory();
    },
    questionPrimeNumber() {
      this.numnator.questionPrimeNumber();
      this.syncHistory();
    },
    questionContainsChara() {
      this.numnator.questionContainsChara(this.containsCharaParam);
      this.syncHistory();
    },
    questionNumberOfDigits() {
      this.numnator.questionNumberOfDigits(this.numberOfDigitsParam);
      this.syncHistory();
    }
  }
};
</script>