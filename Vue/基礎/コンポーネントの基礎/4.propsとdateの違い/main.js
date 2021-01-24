/* propsでは直接データを変更することができないことを確認するプログラム */

/* Vue.jsで推奨される命名規則
v-bind　⇨　ケバブケース
props　⇨　キャメルケース
*/

// 子コンポーネント
const ListTitle = {
  template: `
              <h2>ユーザーリスト</h2>
          `,
};

// 子コンポーネント
const UserDetail = {
  props: {
    user: { type: Object },
    // キャメルケースのuserNameで値を受けっている(ケバブケース例：user-name)
    userName: { type: String },
  },
  // userNameに受け取ったデータをv-modelで書き換える（※ここでは、propsは直接書き換えることができないのでエラーになる）
  // user.name= '名前'はエラーにならないが、user自体にオブジェクトを代入するとエラーになる
  template: `
    <div>
      <h2>選択中のユーザー</h2>
      String: <input v-model='userName'><br>
      Object: <input v-model='user.name'>
    </div> 
  `,
};

// 親コンポーネント
Vue.component("user-list", {
  components: {
    "list-title": ListTitle,
    "user-detail": UserDetail,
  },
  data() {
    return {
      users: [
        { id: 1, name: "ユーザー１" },
        { id: 2, name: "ユーザー2" },
        { id: 3, name: "ユーザー3" },
        { id: 4, name: "ユーザー4" },
        { id: 5, name: "ユーザー5" },
      ],
      selected_user: {},
    };
  },
  // v-bindを使用して、user_nameという名前でselected_user.nameの値を渡している
  template: `
    <div>
      <list-title></list-title>
      <ul>
        <li v-for="user in users" :key="user.id" @click="selected_user = user">
          {{ user.name }}
        </li>
      </ul>
      <user-detail :user='selected_user' :user-name='selected_user.name'></user-detail>
    </div>
    `,
});

const vm = new Vue({
  el: "#app",
});
