import Vue from "vue";
// import { directive } from "vue/types/umd";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;

// グローバル登録なのでどこでも使えるよ！！
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("global mixin");
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
