// import firebase from "firebase";
import firebase from '/firebase.js'

export default {
    // updateTodo( {commit}, newTodo ) {
    //     commit("updateTodo", newTodo);
    // },
    // addTodo( {commit}, todo) {
    //     commit("addTodo", todo);
    // },
    addTodo( {commit}, {todo, date}) {
      commit("addTodo", {todo, date});
    },
    /* Firebase */
    // registerTodo(todo) {
    //   firebase.firestore()
    //   .collection("todos").add({
    //       // date: firebase.firestore.FieldValue.serverTimestamp(),
    //       date: firebase.firestore.Timestamp.fromDate(new Date()),
    //       todo: todo
    //     })
    //     .then((doc) => {
    //       console.log(`追加に成功しました (${doc.id})`);
    //     })
    //     .catch((error) => {
    //       console.log(`追加に失敗しました (${error})`);
    //     });
    // },

    // registerTodo(todos) {
          /* IDを指定する場合はset */
    //     firebase.firestore()
    //     .collection("todos").doc("table").set({
    //         // date: firebase.firestore.FieldValue.serverTimestamp(),
    //         date: firebase.firestore.Timestamp.fromDate(new Date()),
    //         todos: todos,
              // { merge: true }
    //       })
    //       .then((doc) => {
    //         console.log(`追加に成功しました (${doc.id})`);
    //       })
    //       .catch((error) => {
    //         console.log(`追加に失敗しました (${error})`);
    //       });
    // },


    // registerTodo(todos) {
    //   /* 配列に要素を追加する(FieldValue.arrayUnion) */
    //   console.log(todos)

    //   firebase.firestore()
    //   .collection("todos").doc("table").update({
    //     // dates: firebase.firestore.Timestamp.fromDate(new Date()),
    //     // dates: firebase.firestore.Timestamp.fromDate(dates),
    //     // todos: firebase.firestore.FieldValue.arrayUnion('zaru', 'soba')
    //     /* join(separator = ‘,’) */
    //     todos: firebase.firestore.FieldValue.arrayUnion(todos.join())
    //     })
    //     .then(() => {
    //       console.log(`追加に成功しました`);
    //     })
    //     .catch((error) => {
    //       console.log(`追加に失敗しました (${error})`);
    //     });
    // },

      RegisterTodoArray() {
        var addUserToArrayMap = new Map();
        addUserToArrayMap.set("date", new Date());
        addUserToArrayMap.set("todo", "test");
        console.log("addUserToArrayMap", addUserToArrayMap);

        /* 配列に要素を追加する(FieldValue.arrayUnion) */
        firebase.firestore()
        .collection("todos").doc("table").update({
          todoData: firebase.firestore.FieldValue.arrayUnion(addUserToArrayMap)
        })
        .then(() => {
        console.log(`追加に成功しました`);
        })
        .catch((error) => {
        console.log(`追加に失敗しました (${error})`);
        });
      },

      UpdateTodoList(updateData) {
        firebase.firestore()
        .collection("todos").doc("table").update({
        // スプレッド構文を使って、todoDataフィールド（配列）に`updateData`の要素を追加
        todoData: firebase.firestore.FieldValue.arrayUnion(...updateData)
        })
        .then(() => {
        console.log(`追加に成功しました`);
        })
        .catch((error) => {
        console.log(`追加に失敗しました (${error})`);
        });
      },

    // getTodo() {
    //   /* ドキュメント全てのデータを取得する */
    //   firebase.firestore().collection("todos").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.data())
    //     });
    //   });	
    // },
    getTodo() {
      /* ドキュメントIDがtableのフィールドだけ取得 */
      firebase.firestore().collection("todos").doc("table").get().then((doc) => {
        console.log(doc.data());
      });	
    },
};