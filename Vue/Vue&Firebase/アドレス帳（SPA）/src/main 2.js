import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjaiUH3qp_TbQhaCGi0h_vcCf1tjQBwlo",
  authDomain: "proven-gasket-297502.firebaseapp.com",
  projectId: "proven-gasket-297502",
  storageBucket: "proven-gasket-297502.appspot.com",
  messagingSenderId: "783271402009",
  appId: "1:783271402009:web:fe471311846cd5dbb76888",
  measurementId: "G-LKT0Q1R01H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
