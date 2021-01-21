<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
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
              <!-- ルート名で遷移先を指定 -->
              <v-btn @click="$router.push({ name: 'addresses' })"
                >キャンセル</v-btn
              >
              <v-btn color="info" @click="submit">保存</v-btn>
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
  data() {
    return {
      address: {},
    };
  },
  methods: {
    submit() {
      this.addAddress(this.address);
      // $routerでrouterにアクセスできる
      this.$router.push({ name: "addresses" });
      this.address = {};
    },
    // ...は分割代入の構文 メソッドとしてaddAddressを呼び出せるようになる
    ...mapActions(["addAddress"]),
  },
};
</script>
