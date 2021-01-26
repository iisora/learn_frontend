const UserForm = {
  template: `
      <div>
        <div>ユーザー名変更フォーム</div>  
        <input v-model='user_name' />
        <button @click='update'>名前変更</button>
      </div>
    `,
  props: {
    userName: { type: String, required: true },
  },
  data() {
    return {
      user_name: this.userName,
    };
  },
  methods: {
    update() {
      // $emitは親コンポーネントに値を渡す時に使用する
      // 第一引数は、親コンポーネントのtemplateに定義したv-onのイベント名(@update:user-name)を書く
      // 第二引数は、親コンポーネントに渡す値
      this.$emit("update:user-name", this.user_name);
    },
  },
};

const UserDetail = {
  components: {
    "user-form": UserForm,
  },
  data() {
    return {
      user_name: "ヤマダ タロウ",
    };
  },
  // @update:user-nameの中の$eventには$emitの第二引数の値が格納されている
  // user_nameの値を子コンポーネントで編集したuser_nameの値に変更している
  template: `
      <div>
        <div>
          <span>ユーザー名： {{ user_name }}</span>
        </div>
        <div>
          <user-form :user-name='user_name' @update:user-name='user_name = $event'></user-form>
        </div>
      </div>
    `,
};

const vm = new Vue({
  el: "#app",
  components: {
    "user-detail": UserDetail,
  },
});
