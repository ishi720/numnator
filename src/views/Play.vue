<template>
  <div class="play">
    <div class="main">
      <div class="status card">
        <div>範囲: 0〜{{ upperRange }}</div>
        <div>嘘つき度: {{ liarDegree }}%</div>
        <div class="remaining">残り <strong>{{ remaining }}</strong> / {{ maxCount }} 回</div>
      </div>

      <div v-if="isFinished" class="result card" :class="isCleared ? 'cleared' : 'failed'">
        <p class="result-title">{{ isCleared ? 'クリア！' : 'ゲームオーバー' }}</p>
        <p v-if="isCleared">{{ count }} 回目で正解しました</p>
        <p>正解は <strong class="answer">{{ answer }}</strong> でした</p>
        <div class="actions">
          <button class="btn" @click="initialize()">もう一度</button>
          <router-link class="btn btn-secondary" to="/">設定に戻る</router-link>
        </div>
      </div>

      <template v-else>
        <section class="card">
          <h2>質問を1つ選んでください</h2>
          <p v-if="liarDegree > 0" class="note">質問の答えは {{ liarDegree }}% の確率で嘘になります</p>
          <ul class="choices">
            <li v-for="choice in choices" :key="choice.key" class="choice">
              <span class="question-text">
                <template v-for="(text, i) in choice.texts" :key="i">
                  {{ text }}
                  <input
                    v-if="i < choice.params.length"
                    type="number"
                    v-model.number="choice.params[i].value"
                    :min="choice.params[i].min"
                    :max="choice.params[i].max">
                </template>
              </span>
              <button class="btn" :disabled="!isValidChoice(choice)" @click="ask(choice)">質問する</button>
            </li>
          </ul>
        </section>

        <section class="card">
          <h2>答える</h2>
          <div class="choice">
            <span class="question-text">
              <input type="number" v-model.number="guess" min="0" :max="upperRange">
              ですか
            </span>
            <button class="btn" :disabled="!isValidValue(guess, 0, upperRange)" @click="answerGuess()">回答する</button>
          </div>
          <p v-if="remaining === 1" class="warning">最後の1回です。ここで正解しないとゲームオーバーになります</p>
        </section>

        <div class="actions">
          <button class="btn btn-secondary" @click="giveUp()">ギブアップ</button>
        </div>
      </template>
    </div>

    <HistoryItem :history="history" />
  </div>
</template>

<script>
import { markRaw } from 'vue';
import {Numnator, MAX_COUNT, UPPER_RANGE} from '../js/numnator';
import HistoryItem from '../components/HistoryItem.vue';

// 1ターンに提示する質問の数
const CHOICE_COUNT = 3;

// 質問の定義 (texts と params を交互に並べて質問文にする: texts[0] params[0] texts[1] ...)
function questionDefinitions(upperRange) {
  const digits = String(upperRange).length;
  const half = Math.floor(upperRange / 2);
  return [
    { key: 'orMore', method: 'questionOrMore', texts: ['', '以上ですか'], params: [{ min: 0, max: upperRange, value: half }] },
    { key: 'orLess', method: 'questionOrLess', texts: ['', '以下ですか'], params: [{ min: 0, max: upperRange, value: half }] },
    { key: 'above', method: 'questionAbove', texts: ['', 'より大きいですか'], params: [{ min: 0, max: upperRange, value: half }] },
    { key: 'below', method: 'questionBelow', texts: ['', 'より小さいですか'], params: [{ min: 0, max: upperRange, value: half }] },
    { key: 'divided', method: 'questionDivided', texts: ['', 'で割り切れますか'], params: [{ min: 2, max: upperRange, value: 2 }] },
    { key: 'place', method: 'questionPlace', texts: ['', '桁目は', 'ですか'], params: [{ min: 1, max: digits, value: 1 }, { min: 0, max: 9, value: 0 }] },
    { key: 'primeNumber', method: 'questionPrimeNumber', texts: ['素数ですか'], params: [] },
    { key: 'containsChara', method: 'questionContainsChara', texts: ['', 'の文字を含みますか'], params: [{ min: 0, max: 9, value: 0 }] },
    { key: 'numberOfDigits', method: 'questionNumberOfDigits', texts: ['', '桁ですか'], params: [{ min: 1, max: digits, value: 1 }] }
  ];
}

// クエリが無い・数値でない場合は既定値を使う
function queryInt(value, defaultValue) {
  const n = Number(value);
  return value !== undefined && Number.isInteger(n) ? n : defaultValue;
}

export default {
  name: 'play',
  data () {
    return {
      upperRange: UPPER_RANGE,
      liarDegree: queryInt(this.$route.query['liarDegree'], 0),
      maxCount: MAX_COUNT,
      numnator: null,
      history: [],
      count: 0,
      remaining: MAX_COUNT,
      isCleared: false,
      gaveUp: false,
      answer: null,
      choices: [],
      guess: 0
    }
  },
  components: {
    HistoryItem
  },
  computed: {
    isFinished() {
      return this.gaveUp || this.isCleared || this.remaining === 0;
    }
  },
  created: function() {
    this.initialize();
  },
  methods: {
    initialize() {
      // private フィールドを持つクラスは Proxy 化すると動かないため markRaw する
      this.numnator = markRaw(new Numnator(this.upperRange,this.liarDegree,MAX_COUNT));
      this.gaveUp = false;
      this.guess = 0;
      this.syncState();
      this.drawChoices();
    },
    // markRaw したインスタンスの状態は自動で反映されないため、操作のたびにコピーする
    syncState() {
      this.history = [...this.numnator.history];
      this.count = this.numnator.count;
      this.remaining = this.numnator.remaining;
      this.isCleared = this.numnator.isCleared;
      this.answer = this.numnator.answer;
    },
    drawChoices() {
      const defs = questionDefinitions(this.upperRange);
      for (let i = defs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [defs[i], defs[j]] = [defs[j], defs[i]];
      }
      this.choices = defs.slice(0, CHOICE_COUNT);
    },
    isValidValue(value, min, max) {
      return Number.isInteger(value) && min <= value && value <= max;
    },
    isValidChoice(choice) {
      return choice.params.every((p) => this.isValidValue(p.value, p.min, p.max));
    },
    ask(choice) {
      this.numnator[choice.method](...choice.params.map((p) => p.value));
      this.syncState();
      this.drawChoices();
    },
    answerGuess() {
      this.numnator.questionMatch(this.guess);
      this.syncState();
    },
    giveUp() {
      this.gaveUp = true;
    }
  }
};
</script>

<style scoped>
.play {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  max-width: 960px;
  margin: 0 auto;
  padding: 16px;
}

@media (min-width: 768px) {
  .play {
    grid-template-columns: 1fr 280px;
    align-items: start;
  }
}

.main {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

h2 {
  margin: 0 0 12px;
  font-size: 1.1rem;
}

.status {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 8px;
}

.remaining strong {
  font-size: 1.4rem;
  color: #0d3f67;
}

.note {
  margin: 0 0 12px;
  font-size: 0.9rem;
  color: #6c757d;
}

.warning {
  margin: 12px 0 0;
  color: #c0392b;
  font-weight: bold;
}

.choices {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.choice {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #dde2e7;
  border-radius: 6px;
}

.question-text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  font-size: 1.1rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.result-title {
  margin: 0 0 8px;
  font-size: 2rem;
  font-weight: bold;
}

.result.cleared .result-title {
  color: #1e8e3e;
}

.result.failed .result-title {
  color: #c0392b;
}

.answer {
  font-size: 1.5rem;
}
</style>
