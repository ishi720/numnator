<template>
  <div id="history">
  
   <div v-for="item in history">
      {{ item.q }} {{ item.a }}
    </div>
  </div>
</ul>
  </header>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    history: []
  },
  watch: {
    items: function(newHistory,oldHistory){
      this.history = newHistory;
    }
  }
};
</script>

<!-- [
  {q:"",a:false},
  {q:"",a:false}
] -->