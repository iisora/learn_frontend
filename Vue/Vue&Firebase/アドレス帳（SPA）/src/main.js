import Vue from "vue";
import "./plugins/vuetify";
// import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from "firebase";
import firebase from "firebase/app";
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "aaaaaaaaaa",
  authDomain: "aaaaaaaaa",
  projectId: "aaaaaaaaaa",
  storageBucket: "aaaaaaaaaa",
  messagingSenderId: "aaaaaaaa",
  appId: "aaaaaaaa",
  measurementId: "aaaaaaaaaaaaaaaaa,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Vue.use(vuetify, {
//   icons: {
//     iconfont: 'mdi'
//   }
// });

// Vue.use(vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
