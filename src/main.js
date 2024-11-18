import { createApp } from 'vue';
import { createPinia } from 'pinia';
import BodyMassIndexCalculatorPinia from './BodyMassIndexCalculatorPinia.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

//Creates the app
const app = createApp(BodyMassIndexCalculatorPinia);

//Launch Pinia - add to app
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
