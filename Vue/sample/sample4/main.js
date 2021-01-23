const vm = new Vue({
  el: "#app",
  data() {
    return {
      numbers: [],
      total_num: 0,
    };
  },
  watch: {
    // dateの名前と、watchに定義したメソッド名を合わせることで、dataの変更時にメソッドが実行される
    numbers(value) {
      this.total_num = 0;
      this.numbers.forEach((number) => {
        this.total_num += number;
      });
    },
  },
});

window.vm = vm;
