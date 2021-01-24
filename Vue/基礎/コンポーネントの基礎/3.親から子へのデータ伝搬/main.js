/* propsで親からデータを受け取る */

const ListTitle = {
  template: `
              <h2>ユーザーリスト</h2>
          `,
};

const UserDetail = {
  // 親コンポーネントから受け取る値を定義する
  // Object型のuserというプロパティを親コンポーネントから受け取ることができる
  // 親コンポーネントでUserDetailコンポーネントを呼び出す際、v-bind:user=<ユーザーオブジェクト>の形で値を渡す
  props: {
    user: {
      type: Object,
    },
  },
  // propsもdataと同じようにアクセス可能
  template: `
    <div>
      <h2>選択中のユーザー</h2>
      {{ user.name }}
    </div> 
  `,
};

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
      // クリックされたユーザーを格納する
      selected_user: {},
    };
  },
  // user-detailコンポーネントにはv-bindでselected_userを渡すようにしている
  // v-bindの名前とpropsの名前は一致する必要がある
  template: `
    <div>
      <list-title></list-title>
      <ul>
        <li v-for="user in users" :key="user.id" @click="selected_user = user">
          {{ user.name }}
        </li>
      </ul>
      <user-detail :user='selected_user'></user-detail>
    </div>
    `,
});

const vm = new Vue({
  el: "#app",
});
