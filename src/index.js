import Vue from "vue";
import UIkit from "uikit";
import App from "./App.vue";
import VueAnalytics from "vue-analytics";

import Icons from "uikit/dist/js/uikit-icons";
import styles from "uikit/dist/css/uikit.min.css";

UIkit.use(Icons);

Vue.use(VueAnalytics, {
	id: "UA-144905876-1",
	checkDuplicatedScript: true,
	autoTracking: {
		screenview: true
	}
});

new Vue({
	el: "#content",
	render: h => h(App),
	components: { App }
});