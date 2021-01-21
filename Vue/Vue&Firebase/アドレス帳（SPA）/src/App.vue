<template>
  <v-app>
    <v-toolbar app>
      <!-- <v-toolbar-side-icon @click="openSideMenu"> -->
      <v-toolbar-side-icon @click="toggleSideMenu"> </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />

    <v-content>
      <!-- この一行でルート毎に設定したコンポーネントが表示されるようになる -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// コンポーネントのmethodsにストアのアクションメソッドを組み込む役割
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav,
  },
  data() {
    return {
      //
    };
  },
  methods: {
    // 1つ目の方法(コンポーネントからストアの利用)
    openSideMenu() {
      // dispatchメソッドでストアのアクションを呼び出す
      this.$store.dispatch("toggleSideMenu");
    },
    // 2つめの方法(mapActions)
    // ...は分割代入の構文 メソッドとしてtoggleSideMenuを呼び出せるようになる
    ...mapActions(["toggleSideMenu"]),
  },
};
</script>
