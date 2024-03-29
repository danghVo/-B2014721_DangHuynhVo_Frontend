import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import router from  "./router/index";

import './assets/main.css'

const app = createApp(App);

app.use(router);

app.mount("#app");