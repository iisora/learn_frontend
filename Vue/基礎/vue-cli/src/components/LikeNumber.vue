<template>
  <!-- templateのルートの要素は必ずオンリーーワン🐶 -->
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // propsはキャメルケースがおすすめ
  // propsは配列でもオブジェクトでも指定できる
  props: ["totalNumber"],
  // props: {
  //   // バリデーション→渡ってきた値が一致しないとエラーにできる
  //   totalNumber: {
  //     type: Number,
  //     // 何も指定されなかった場合
  //     default: 100,
  //   },
  //   testProps: {
  //     type: String,
  //   },
  // },
  /* 依存関係に基づいてキャッシュされる
  computed内のプロパティ内のtotalNumberの値が変わった時に、呼バレる なので、動的な値を扱う処理をするときはcomputedを使う */
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    },
  },
  /*
   例えば{{}}内でmethodのプロパティを参照していたら少しでも画面が再描画されたら毎度呼び出される(別のメソッドが実行されて画面を再描画したときなども同時に実行される)
   また、呼び出す時に()必要
  */
  methods: {
    increment() {
      // this.totalNumber += 1;
      // 送り口 $emitはあくまでカスタムイベントを作るもの(発火装置)
      this.$emit("my-click", this.totalNumber + 1);
    },
  },
};
</script>

// scoped付けないと全てのdivタグに適応される
<style scoped>
div {
  border: 1px solid blue;
}
</style>
