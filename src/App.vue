<template>
  <div id="app">
    <HeaderItem />
    <router-view/>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue';
import {Numnator} from './js/numnator';

export default {
  name: 'app',
  data () {
    return {
      upperRange: 100
    };
  },
  components: {
    HeaderItem
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f2f4f6;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*
  #1ee3cf;
  #6b48ff;
  */
}
</style>
