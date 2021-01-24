const vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello, world!",
    };
  },
});

window.vm = vm;
