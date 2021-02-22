<template>
  <div>
    <h3>Home</h3>
    <button @click="goUsers">UsersのページにGo</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!-- <input type="text" :value="message" @input="updateMessage" /> -->
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // スプレッド演算子(ES6)
    ...mapGetters("count", ["doubleCount", "tripleCount"]),
    // doubleCount() {
    //   return this.$store.getters["count/doubleCount"];
    // },
    // tripleCount() {
    //   return this.$store.getters["count/tripleCount"];
    // },
    // message() {
    //   return this.$store.getters.message;
    // },
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    },
  },
  methods: {
    // updateMessage(e) {
    //   this.$store.dispatch("updateMessage", e.target.value);
    // },
    goUsers() {
      this.$router.push({ name: "users-profile", params: { unkoman: 1 } });
    },
  },
};
</script>
