<template>
  <nav>
    <h2>Homeのヘッダーパーツ</h2>
    <router-link to="/" active-class="link--active" exact class="link"
      >Home</router-link
    >
    <router-link
      :to="{
        name: 'users-profile',
        params: { unkoman: 1 },
        query: { nasubi: 'purple', stone: 'radius' },
        hash: '#next-user',
      }"
      active-class="link--active"
      exact
      class="link"
      >Users</router-link
    >
    <button @click="increment(2)">+1</button>
    <button @click="decrement(2)">-1</button>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("count", ["increment", "decrement"]),
    // increment() {
    //   this.$store.dispatch("increment", 2);
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", 2);
    // },
  },
};
</script>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>
