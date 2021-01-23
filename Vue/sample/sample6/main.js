const vm = new Vue({
  el: "#app",
  data() {
    return {
      sum: 3000000,
    };
  },
  // 表示の際のデータ加工はなるべくfilterを経由する
  filters: {
    numberWithDelimiter(value) {
      if (!value) return "0";
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    },
  },
});

window.vm = vm;
