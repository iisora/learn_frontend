const vm = new Vue({
  el: "#app",
  data() {
    return {
      button_disabled: false,
    };
  },
  computed: {
    button_label() {
      console.log("button_disabled called");
      return this.button_disabled ? "無効" : "有効";
    },
    now() {
      return new Date().toTimeString();
    },
  },
  methods: {
    log() {
      console.log(this.now);
    },
  },
});

window.vm = vm;
