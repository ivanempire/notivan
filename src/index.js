// Business logic
import { createApp } from "vue";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import AppComponent from "./AppComponent.vue";

// Styles
import stylesCustom from "./global.css";
import stylesDefault from "uikit/dist/css/uikit.min.css";

// Create the app
UIkit.use(Icons);
const app = createApp(AppComponent);
app.mount("#content");