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
      // 呼び出し側もsyncの形式にする
      // 命名規則：update:[propsの名前]
      this.$emit("update:userName", this.user_name);
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
  // v-bindの部分にsync修飾子を付けると、v-onの記述を省略できる
  template: `
      <div>
        <div>
          <span>ユーザー名： {{ user_name }}</span>
        </div>
        <div>
          <user-form :user-name.sync='user_name'></user-form>
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
