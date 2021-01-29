<template>
  <v-app>
    <v-app-bar>
      <!-- v-showでログイン状態でしか表示しないように制御 -->
      <v-app-bar-nav-icon
        v-show="$store.state.login_user"
        @click.stop="toggleSideMenu"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- ログインユーザーが存在する場合のみ、ボタンを表示する -->
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
// コンポーネントのmethodsにストアのアクションメソッドを組み込む役割
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
export default {
  name: "App",
  components: {
    SideNav,
  },
  created() {
    // firebaseのlogin,logoutは非同期に実行されるため、以下のメソッドを経由する必要がある。
    // login,logoutの完了を検知する
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses();
        // ユーザーがログインして、現在のページがホームだった場合に連絡先一覧に遷移させる
        if (this.$router.currentRoute.name === "Home")
          this.$router.push({ name: "addresses" });
      } else {
        this.deleteLoginUser();
        // 単純にpushメソッドでホーム画面に移動させているだけ
        this.$router.push({ name: "Home" }, () => {});
      }
    });
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
    // ...は分割代入の構文 メソッドとしてtoggleSideMenuとsetLoginUserを呼び出せるようになる
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
      "fetchAddresses",
    ]),
  },
};
</script>
