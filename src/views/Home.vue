<template>
  <div class="home">
    <div class="input-group">
      <span>範囲： </span>
      <input type="number" v-model.number="upperRange" min="0">
    </div>

    <div class="input-group">
      <span>嘘つき度： </span>
      <input type="number" v-model.number="liarDegree" min="0" max="100">
    </div>

    <div class="button-container">
      <router-link :to="{path:'Play', query: { upperRange: upperRange, liarDegree: liarDegree }}">
        <button>開始</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      upperRange: 100,
      liarDegree: 0
    };
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  display: flex;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
}

.input-group {
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}

.input-group span {
  margin-right: 10px;
}

input[type="number"] {
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80px;
}

.button-container {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
