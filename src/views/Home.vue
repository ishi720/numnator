<template>
  <div class="home">

    <input type="number" v-model.number="upperRange">

    <router-link :to="{path:'Play',query: {upperRange: upperRange}}">
      <button>開始</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      upperRange: 100
    }
  }
};
</script>