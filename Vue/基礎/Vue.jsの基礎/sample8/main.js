const vm = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello, World!",
    };
  },
  methods: {
    clickLog(event) {
      //   console.log(event);
      //   console.log(event.target);
      console.log(this.message);
    },
    hoverLog() {
      console.log("hover");
    },
  },
});

window.vm = vm;
