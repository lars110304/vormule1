import { createApp } from "vue";

import App from "./components/app.vue";
import router from "./routes.js"; // <---

createApp(App).use(router).mount("#app");
