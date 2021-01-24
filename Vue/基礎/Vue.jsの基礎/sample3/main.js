const vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello, world!",
    };
  },
});

window.vm = vm;

// $watchメソッドは引数に2つの関数を受け取る
vm.$watch(
  // 第一引数：監視対象のデータを返す関数
  function () {
    // thisはVueインスタンスを表している
    return this.message;
  },
  // 第二引数:値が変わった場合に呼び出されるコールバック関数
  function (message) {
    //引数に変更後の値が渡される
    console.log("変更後の値: " + message);
  }
);
