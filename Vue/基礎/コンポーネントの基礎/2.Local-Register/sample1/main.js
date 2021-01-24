/* Vueのコンポーネントのローカル登録は、Vueインスタンスのcomponentsオプションで使用するコンポーネントを登録する
ローカル登録の場合、登録したVueインスタンス配下でしかコンポーネントを利用できないので、必要に応じてローカル登録してからコンポーネントを使用する */

Vue.component("user-list", {
  components: {
    // user-listのcomponentsオプションでローカル登録する
    "list-title": ListTitle,
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
    };
  },
  // ローカル登録の場合は、登録先コンポーネント内のテンプレートからしか呼び出すことができない（マウント先のdiv要素配下でも勿論呼べない）
  template: `
    <div>
      <list-title></list-title>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
    `,
});

/* オブジェクトの形式 */
const ListTitle = {
  template: `
              <h2>ユーザーリスト</h2>
          `,
};

const vm = new Vue({
  el: "#app",
});
