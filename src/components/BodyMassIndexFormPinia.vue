<script setup>
import { useBmiStore } from "../stores/bmiStore";

const bmiStore = useBmiStore(); // Access the store
</script>

<template>
  <div class="form">
    <label>
      Height ({{ bmiStore.useMetric ? "meters" : "inches" }}):
      <input type="number" v-model="bmiStore.height" @input="bmiStore.validateInput" />
    </label>
    <span v-if="bmiStore.heightError" class="error">{{ bmiStore.heightError }}</span>

    <label>
      Weight ({{ bmiStore.useMetric ? "kilograms" : "pounds" }}):
      <input type="number" v-model="bmiStore.weight" @input="bmiStore.validateInput" />
    </label>
    <span v-if="bmiStore.weightError" class="error">{{ bmiStore.weightError }}</span>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: lightblue;
}
</style>
