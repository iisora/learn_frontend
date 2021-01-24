/* Vueのコンポーネントメソッドで登録したコンポーネントはグローバルに登録され、Vueのtemplate上のどこからでも呼び出すことができる 
しかし、登録して使用していない場合でもコンポーネントの読み込みが発生し、ビルドの時間やアプリケーションのサイズに影響する */

// 第一引数に任意のコンポーネント名を指定する
Vue.component("user-list", {
  // Vueインスタンスと違い、コンポーネントでは常に関数でデータを返す必要がある
  // なので、関数の戻り値でデータを定義する
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
  // テンプレートの先頭の要素は１つしか書くことができない（ここではdivが先頭の要素になる）
  // 例えば、divを消すと、<list-title>と<ul>の複数の要素が並ぶのでエラーになる
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

// コンポーネントは別のコンポーネントで呼び出す場合に関しては順番は関係ない（ここでは、user_listコンポーネントのtemplate内）
Vue.component("list-title", {
  template: `
              <h2>ユーザーリスト</h2>
          `,
});

// コンポーネントの登録後にインスタンスを生成する(必ずコンポーネント登録後に記入)
const vm = new Vue({
  el: "#app",
});
