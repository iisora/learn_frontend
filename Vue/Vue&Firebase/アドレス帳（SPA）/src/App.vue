<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        absolute
        color="#fcb69f"
        prominent
        src="./images/image1.jpeg"
        dark
        dense
        shrink-on-scroll
        elevate-on-scroll
        scroll-target="#scrolling-techniques-6"
      >
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

        <template v-slot:extension>
          <!-- <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs> -->
          <v-tabs v-model="tab" align-with-title>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="(menuItem, index) in menuItems" :key="index">
              {{ menuItem }}
            </v-tab>
          </v-tabs>
        </template>
        <v-checkbox
          v-model="collapseOnScroll"
          color="white"
          hide-details
        ></v-checkbox>
      </v-app-bar>
      <SideNav />

      <v-content>
        <v-sheet
          id="scrolling-techniques-6"
          class="overflow-y-auto"
          max-height="1000"
        >
          <!-- <v-container fluid fill-height align-start> -->
          <v-container style="height: 1500px;">
            <router-view />
          </v-container>
        </v-sheet>
      </v-content>
    </v-card>
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
  // data() {
  //   return {
  //     //
  //   };
  // },
  data() {
    return {
      collapseOnScroll: true,
      tab: null,
      menuItems: [
        "ホーム",
        "連絡先一覧",
        "TODO",
        "このサイトについて",
        "メール送信",
      ],
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
