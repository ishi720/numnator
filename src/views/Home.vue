<template>
  <div class="home">

    <div>
      <span>範囲： </span>
      <input type="number" v-model.number="upperRange" min="0">
    </div>

    <div>
      <span>嘘つき度： </span>
      <input type="number" v-model.number="liarDegree" min="0" max="100">
    </div>

    <router-link :to="{path:'Play',query: {
      upperRange: upperRange,
      liarDegree: liarDegree
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
      liarDegree: 0
    }
  }
};
</script>
