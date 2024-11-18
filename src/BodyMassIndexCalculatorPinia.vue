<script setup>
import { useBmiStore } from "./stores/bmiStore";
import BodyMassIndexForm from "./components/BodyMassIndexFormPinia.vue";

const bmiStore = useBmiStore(); // Access the store
</script>

<template>
  <div class="app">
    <h1>Body Mass Index Calculator</h1>
    <label>
      <input type="checkbox" v-model="bmiStore.useMetric" @change="bmiStore.clearData" />
      Use metric units
    </label>
    <BodyMassIndexForm />
    <p v-if="bmiStore.bmi !== null">Your BMI: {{ bmiStore.bmi.toFixed(2) }}</p>
  </div>
</template>

<style scoped>

/* Additional styling since prior lab */
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
  background-color: bisque;
  padding: 20px;
  border-radius: 10px;
}

body {
  margin: 0;
  background-color: bisque;
}
</style>

