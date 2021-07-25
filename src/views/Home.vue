<template>
  <div class="home">

    <input type="number" v-model.number="upperRange" min="0">

    <router-link :to="{path:'Play',query: {
      upperRange: upperRange,
      liarDegree: liarDegree,
    }}">
      <button>開始</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      upperRange: 100,
      liarDegree: 0,
    }
  }
};
</script>