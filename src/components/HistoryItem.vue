<template>
  <div id="history">
    <div class="historyHeader">HISTORY</div>
    <div v-for="item in history" :key="item.q">
      {{ item.q }} 

      <span v-if="item.a === true">
        Yes
      </span>
      <span v-else>
        No
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    history: []
  },
  watch: {
    history: function(newHistory){
      this.history = newHistory;
    }
  }
};
</script>

<style scoped>
#history {
  width: 200px;
  right: 0px;
  bottom: 0px;
  top:  37px;
  background-color: #555;
  position: absolute;
  overflow: auto;
  padding:  5px;
  color: #f2f4f6;
  text-align: left;
  font-family: monospace;
}
.historyHeader {
  font-weight: bold;
  text-align: center;
  font-size:  16px;
  border-bottom: solid 1px #f2f4f6;
  padding: 5px;
  margin-bottom: 5px;
}
</style>