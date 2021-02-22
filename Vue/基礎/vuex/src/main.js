import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log("global-beforeEach");
  if (to.path === "users/1/a") {
    next({ path: "/" });
  }
  next();
});

// App.vueでの$rootはこのインスタンスを指し示している
// router.jsのthis.appもこのインスタンスを指し示している※ this.app === $root
new Vue({
  // router: router,
  router, // ※
  store,
  render: (h) => h(App),
}).$mount("#app");
