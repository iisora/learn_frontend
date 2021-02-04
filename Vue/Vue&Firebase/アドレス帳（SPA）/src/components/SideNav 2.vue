<template>
  <!-- <v-layout wrap style="height: 200px;"> -->
  <!-- Toggleボタン -->
  <!-- <v-container>
      <v-layout justify-center>
        <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
      </v-layout>
    </v-container> -->
  <!--デフォルトで左に隠れているメニューの部分-->
  <!-- <v-navigation-drawer v-model="drawer" absolute temporary> -->
  <!-- テンプレートから$storeでストアにアクセスできる -->
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <!-- <img src="../images/image1.jpeg" /> -->
          <img v-if="photoURL" :src="photoURL" />
        </v-list-tile-avatar>

        <v-list-tile-content>
          <!-- <v-list-tile-title>iisora</v-list-tile-title> -->
          <v-list-tile-title>{{ userName }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
        <v-list-tile-action>
          <!-- 他にどんなアイコンが使用できるかは、Material IOで確認(ここではlist) -->
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-layout> -->
</template>

<script>
// mapActionsのgetter版
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //メニュー開閉フラグ(ストアに移行)
      //   drawer: false,
      //メニューの情報
      items: [
        // { title: "ホーム", icon: "home", link: { name: "home" } },
        { title: "連絡先一覧", icon: "list", link: { name: "addresses" } },
      ],
    };
  },
  // actionと違ってcomputedに組み込むことで、そのコンポーネントの一つの戻り値としてgetterの値を参照できる
  computed: {
    ...mapGetters(["userName", "photoURL"]),
  },
};
</script>
