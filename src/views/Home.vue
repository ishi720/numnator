<template>
  <div class="home">
    <div class="card">
      <p class="lead">
        質問を{{ maxCount }}回以内で0〜{{ upperRange }} の数字を当ててください。
      </p>

      <label class="input-group">
        <span>嘘つき度 (%)</span>
        <input type="number" v-model.number="liarDegree" min="0" max="100">
      </label>

      <div class="button-container">
        <router-link class="btn" :to="{name: 'play', query: { liarDegree: liarDegree }}">開始</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { MAX_COUNT, UPPER_RANGE } from '../js/numnator';

export default {
  name: 'home',
  data() {
    return {
      upperRange: UPPER_RANGE,
      liarDegree: 0,
      maxCount: MAX_COUNT
    };
  }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  padding: 32px 16px;
}

.card {
  width: 100%;
  max-width: 420px;
}

.lead {
  margin: 0 0 20px;
  line-height: 1.6;
}

.input-group {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.2rem;
}

.button-container {
  margin-top: 20px;
}

.btn {
  font-size: 1.2rem;
}
</style>
