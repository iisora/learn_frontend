<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img v-if="photoURL" :src="photoURL" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
        // routerで指定したnameの値に紐づいている
        { title: "ホーム", icon: "mdi-home", link: { name: "Home" } },
        {
          title: "連絡先一覧",
          icon: "mdi-menu",
          link: { name: "addresses" },
        },
        {
          title: "TODO",
          icon: "flutter_dash",
          link: { name: "Todo" },
        },
        {
          title: "このサイトについて",
          icon: "airplay",
          link: { name: "About" },
        },
        {
          title: "メール送信",
          icon: "email,",
          link: { name: "About" },
        },
      ],
    };
  },
  // actionと違ってcomputedに組み込むことで、そのコンポーネントの一つの戻り値としてgetterの値を参照できる
  computed: {
    ...mapGetters(["userName", "photoURL"]),
  },
};
</script>
