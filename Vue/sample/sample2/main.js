const vm = new Vue({
  el: "#app",
  // 無名関数を渡すことで、返り値のオブジェクトがdateにセットされる
  //   data: function() {
  //       return {
  //           message: 'Hello, world!'
  //       }
  //   }
  // 短縮形
  data() {
    return {
      message: "Hello, world!",
    };
  },
});

window.vm = vm;
