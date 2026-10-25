<template>
  <div class="history card">
    <div class="historyHeader">HISTORY</div>
    <p v-if="history.length === 0" class="empty">まだ質問していません</p>
    <ol v-else>
      <li v-for="(item, index) in history" :key="index">
        <span class="question">{{ item.q }}</span>
        <span class="badge" :class="item.a === true ? 'yes' : 'no'">
          {{ item.a === true ? 'Yes' : 'No' }}
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    history: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.history {
  text-align: left;
}
.historyHeader {
  font-weight: bold;
  text-align: center;
  font-size: 16px;
  border-bottom: solid 1px #dde2e7;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.empty {
  margin: 0;
  text-align: center;
  color: #6c757d;
}
ol {
  margin: 0;
  padding-left: 1.8em;
}
li {
  padding: 4px 0;
}
li + li {
  border-top: 1px dashed #eef0f2;
}
.question {
  margin-right: 8px;
}
.badge {
  display: inline-block;
  min-width: 2.5em;
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
.badge.yes {
  background-color: #1e8e3e;
}
.badge.no {
  background-color: #c0392b;
}
</style>
