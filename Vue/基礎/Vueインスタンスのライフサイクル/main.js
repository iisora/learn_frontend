const vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "こんにちは",
      interval_id: null,
    };
  },
  /* インスタンスのオプションとして、ライフサイクルフックで実行するメソッドを実行順に上から定義している */
  /* フックごとに特定の処理を差し込むことができる */
  beforeCreate() {
    console.log("Vueインスタンス作成前");
  },
  // この時点でデータにアクセスできる
  created() {
    console.log("Vueインスタンス作成後");
    // インスタンス作成時点でデータが書き換えられるので、表示上はこのメッセージが初期に表示される
    this.message = "インスランスが作成されました";

    let seconds = 1;
    /* setIntervalの返り値を他のフックで参照できるようにデータに保持する */
    this.interval_id = setInterval(() => {
      console.log(`${seconds++}秒経過`);
    }, 1000);
  },
  beforeMount() {
    console.log("マウント前");
  },
  mounted() {
    console.log("マウント後");
  },
  beforeUpdate() {
    console.log("再描画前");
  },
  updated() {
    console.log("再描画後");
  },
  // Vueインスタンス削除前の後始末処理を行うフック
  beforeDestroy() {
    console.log("Vueインスタンス削除前");
    // intervalを解除
    clearInterval(this.interval_id);
  },
  /* 一般的な開発ではではコンポーネントの単位で複数のVueインスタンスを作成するので、インスタンスが使用されなくなった時点で削除する(大規模なアプリケーションにおいてメモリリークの問題を解決するために明示的に呼び出す) */
  destroyed() {
    console.log("Vueインスタンス削除後");
  },
});

window.vm = vm;
