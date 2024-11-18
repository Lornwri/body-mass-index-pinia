import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBmiStore = defineStore("bmi", () => {
    const useMetric = ref(true); // Metric or Imperial
    const height = ref(""); // User input for height
    const weight = ref(""); // User input for weight
    const heightError = ref("");
    const weightError = ref("");

    // Validation
    const validateInput = () => {
        const maxHeight = useMetric.value ? 3 : 108; // Max height in meters or inches
        const maxWeight = useMetric.value ? 500 : 1100; // Max weight in kg or lbs

        heightError.value =
            height.value <= 0 || height.value > maxHeight ? "Invalid height" : "";
        weightError.value =
            weight.value <= 0 || weight.value > maxWeight ? "Invalid weight" : "";
    };

    // Computed BMI
    const bmi = computed(() => {
        if (heightError.value || weightError.value || !height.value || !weight.value) {
            return null; // Return null if there are validation errors
        }

        if (useMetric.value) {
            return weight.value / (height.value * height.value);
        } else {
            return (weight.value / (height.value * height.value)) * 730;
        }
    });

    // Clear data when switching units
    const clearData = () => {
        height.value = "";
        weight.value = "";
        heightError.value = "";
        weightError.value = "";
    };

    return {
        useMetric,
        height,
        weight,
        heightError,
        weightError,
        bmi,
        validateInput,
        clearData,
    };
});
