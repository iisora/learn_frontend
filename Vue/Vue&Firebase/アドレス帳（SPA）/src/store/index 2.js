import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: [],
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer;
    },
    addAddress(state, { id, address }) {
      // addressにidが含まれた状態でstoreに格納される
      address.id = id;
      state.addresses.push(address);
    },
    updateAddress (state, { id, address }) {
      // findIndexメソッドによって対象のaddressオブジェクトが存在するindexを調べている
      const index = state.addresses.findIndex(address => address.ud === id)

      // 調べたindexの位置に新しいaddressオブジェクトを代入することで値を更新する
      state.addresses[index] = address
    },
    deleteAddress (state, { id }) {
      // findIndexメソッドによって対象のaddressオブジェクトが存在するindexを調べている
      const index = state.addresses.findIndex(address => address.ud === id)

      // spliceメソッドで調べたindexの位置から指定した要素数を削除する
      state.addresses.splice(index, 1)
    },
  },
  actions: {
    // これでコンポーネントからsetLoginUserを呼び出せば、ログインユーザーを格納することができる
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    // ログインユーザーを削除する
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    logout() {
      // signOutメソッドを呼び出すことでログアウトできる
      firebase.auth().signOut();
    },
    // firebaseでGoogleの認証機能を利用する
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu");
    },
    // actionの引数に渡ってくるコンテキストオブジェクトにはgettersも含まれているので、以下のように記述する
    addAddress({ getters, commit }, address) {
      // gettersからuidを取得できたら、firestoreのcollectionメソッドでデータベース上のpathを指定してaddメソッドで連絡先のオブジェクトを追加している
      if (this.getters.uid)
        firebase
          .firestore()
          // firestoreのルールで指定したパスと合わせる
          .collection(`users/${getters.uid}/addresses`)
          // addメソッドのコールバック関数には、documentオブジェクトが渡ってくるので、それをdoc変数で受け取り、docオブジェクトからidを取り出し、commitの第二引数でデータを渡す必要があるのでオブジェクトの形式で第二引数にいれる
          .add(address)
          .then((doc) => {
            commit("addAddress", { id: doc.id, address });
          });
    },
    // getメソッドを呼び出すと非同期にデータの取得が実行され、thenメソッドに渡した関数の引数でgetの結果を受け取ることができる
    fetchAddresses({ getters, commit }) {
      firebase
        .firestore()
        // firestoreのルールで指定したパスと合わせる
        .collection(`users/${getters.uid}/addresses`)
        .get()
        .then((snapshot) => {
          snapshot.forEach(
            (doc) => commit("addAddress", { id: doc.id, address: doc.data() }) // これでstoreに格納されているアドレスには全てidが含まれている状態になる
          );
        });
    },
    updateAddress ({ getters, commit }, { id, address}) {
      if (getters.uid) {
        // docメソッドにidを渡して、更新対象を取得してからupdateメソッドを実行する
        // updateメソッドは非同期で実行され、更新終了後に引数のコールバック関数が呼ばれるので、更新完了した時点でコミットされてstateが更新される
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).update(address).then(() => {
          commit('updateAddress', { id, address })
        })
      }
    },
    // 非同期で削除が完了→引数でコールバック関数を呼バレる→mutationsを呼び出してstateから削除する
    deleteAddress ({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/addresses`).doc(id).delete().then(() => {
          commit('deleteAddress', { id })
        })
      }
    },
  },
  // gettersの関数には自動的にstateの変数が渡ってくるので、stateから取得したデータを加工して返すという使い方をする
  getters: {
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    // 関数を返す関数,内側の関数：idを引数としてストアのアドレス情報の中からidがマッチするものを返す関数
    getAddressById: state => id => state.addresses.find(address => address.id === id)
  },
});
