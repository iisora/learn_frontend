const vm = new Vue({
  el: "#app",
  /* テンプレートオプション */
  template: `
  <div v-if="message">
  {{ message }}
  </div>
  <div v-else>
    メッセージがありません
  </div>
  `,
  data() {
    return {
      message: "Hello, world!",
    };
  },
});

window.vm = vm;
