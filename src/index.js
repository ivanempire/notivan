import Vue from "vue";
import UIkit from "uikit";
import App from "./App.vue";

import Icons from "uikit/dist/js/uikit-icons";
import styles from "uikit/dist/css/uikit.min.css";

UIkit.use(Icons);

new Vue({
	el: "#content",
	render: h => h(App),
	components: { App }
});