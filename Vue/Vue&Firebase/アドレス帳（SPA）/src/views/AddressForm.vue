<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="address.name" label="名前"></v-text-field>
              <v-text-field
                v-model="address.tel"
                label="電話番号"
              ></v-text-field>
              <v-text-field
                v-model="address.email"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="address.address"
                label="住所"
              ></v-text-field>
              <div class="text-center">
                <!-- ルート名で遷移先を指定 -->
                <v-btn @click="$router.push({ name: 'addresses' })"
                  >キャンセル</v-btn
                >
                <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// コンポーネントのmethodsにストアのアクションメソッドを組み込む役割
import { mapActions } from "vuex";
export default {
  created() {
    // routeのパラメータにaddress_idが含まれているかチェック($route.paramsでパスに含まれているパラメータにアクセス)
    if (!this.$route.params.address_id) return;

    // 引数にaddress_idwp渡すことで該当する連絡先を取得する
    const address = this.$store.getters.getAddressById(
      this.$route.params.address_id
    );
    if (address) {
      this.address = address;
    } else {
      // 取得できなかった場合は一覧に遷移する
      this.$router.push({ name: "addresses" });
    }
  },
  data() {
    return {
      address: {},
    };
  },
  methods: {
    submit() {
      //新規追加と更新処理を分ける
      if (this.$route.params.address_id) {
        this.updateAddress({
          id: this.$route.params.address_id,
          address: this.address,
        });
      } else {
        this.addAddress(this.address);
      }
      // $routerでrouterにアクセスできる
      this.$router.push({ name: "addresses" });
      this.address = {};
    },
    // ...は分割代入の構文 メソッドとしてaddAddressを呼び出せるようになる
    ...mapActions(["addAddress", "updateAddress"]),
  },
};
</script>
