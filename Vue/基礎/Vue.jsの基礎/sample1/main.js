const vm = new Vue({
  // elオプションにはVue.jsのインスタンスを適用するDOM要素を指定する
  // VueインスタンスをDOMに適用することを「マウント」という
  // マウント対象のDOMは、CSSセレクタかDOM要素のオブジェクトを渡して指定する(DOM要素のオブジェクト：document.getElementByIdメソッドなどで取得したオブジェクト)
  el: "#app", // id="app"のdiv要素にマウント
  data: {
    message: "Hello, World!",
  },
});

// elプロパティを使わなくても$mountでマウント可能
// Vueインスタンス生成時に存在しなかったDOM要素に後から動的にマウントしたいときに主に使用する(通常はel)
// vm.$mount("#app");
