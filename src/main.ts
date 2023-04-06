import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Quasar, Notify } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/dist/quasar.css";
import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
app.use(Quasar, {
  plugins: {
    Notify,
  },
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    },
  },
});
app.use(pinia);
app.use(router);

app.mount("#app");
