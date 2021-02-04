<template>
  <div>
    <!-- パスカルケース -->
    <LikeHeader></LikeHeader>
    <!-- ケバブケース -->
    <!-- <like-header></like-header> -->
    <h2>{{ number }}</h2>
    <!-- v-bindで動的な値を渡せる、Thymeleafのth:field的な？ 属性はケバブケースがオススメ-->
    <!-- 静的な値も渡せる -->
    <LikeNumber
      :total-number="number"
      v-on:my-click="number = $event"
    ></LikeNumber
    ><!-- 受け口 (値が$eventにはいる)-->
    <LikeNumber v-bind:total-number="6"></LikeNumber>
    <LikeNumber total-number="6" @my-click="incrementNumber"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  data() {
    return {
      number: 10,
    };
  },
  // ローカル登録なので、ここだけ(App.vue)でしか使えない
  components: {
    // ケバブからパスカルは無理(パスカル推奨)
    // LikeHeader: LikeHeader,
    LikeHeader,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
