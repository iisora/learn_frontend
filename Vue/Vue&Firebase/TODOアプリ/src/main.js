import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/index';
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_BASEURL

// intercept : 途中で捕まえる
axios.interceptors.request.use(
  config => {
    console.log("interceptors request", config);
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);
axios.interceptors.response.use(
  response => {
    console.log("interceptors response",response);
    return response;
  },
  error => {
    //catchへ行くようにする
    return Promise.reject(error)
  }
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
