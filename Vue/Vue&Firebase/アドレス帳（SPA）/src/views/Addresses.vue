<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 text-right>
        <router-link :to="{ name: 'address_edit' }">
          <v-btn color="info">
            連絡先追加
          </v-btn>
        </router-link>
      </v-flex>

      <v-flex xs12 mt-3 justify-center>
        <v-data-table :headers="headers" :items="addresses">
          <template v-slot:item.action="{ item }">
            <router-link
              :to="{ name: 'address_edit', params: { address_id: item.id } }"
            >
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)"
              >mdi-delete</v-icon
            >
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // インスタンスが作成されたタイミングでストアのデータを配列に格納する(連絡先のデータをストアに取りに行く)
  created() {
    // $storeでストアにアクセスにできる。
    // ストアのデータは一時的なデータの保持しかできないので、ブラウザをリロードするとデータが消える(フラッシュタイプみたいな？)
    this.addresses = this.$store.state.addresses;
  },
  data() {
    return {
      // プロパティ名をvalueにセットする
      headers: [
        { text: "名前", value: "name" },
        { text: "電話番号", value: "tel" },
        { text: "メールアドレス", value: "email" },
        { text: "住所", value: "address" },
        { text: "操作", value: "action", sortable: false },
      ],
      // 初期は空にしておく
      addresses: [],
    };
  },
  methods: {
    deleteConfirm(id) {
      if (confirm("削除してよろしいですか？")) {
        this.deleteAddress({ id });
      }
    },
    // Actionの準備
    ...mapActions(["deleteAddress"]),
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
