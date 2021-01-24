const vm = new Vue({
  el: "#app",
  data: {
    name: "山田",
    email: "user1@example.jp",
    text: "xxxxについて",
  },
  methods: {
    submit() {
      const inquiry = `
        次の問い合わせ内容を送信しました。
        
        【名前】
        ${this.name}
        【メールアドレス】
        ${this.email}
        【お問合せ内容】
        ${this.text}
      `;
      alert(inquiry);
    },
  },
});

window.vm = vm;
