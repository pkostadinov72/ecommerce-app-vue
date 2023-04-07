import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { Quasar, Notify } from "quasar";
import "./assets/main.css";
import "quasar/dist/quasar.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(Quasar, {
  plugins: {
    Notify,
  },
});

app.mount("#app");
