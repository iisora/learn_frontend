<template>
    <div class="container-fluid">
      <div class="form-group">
        <h1 class="app-title mt-3">TODOアプリ</h1>
        <h3 class="todo-h3 mt-5">日付と作業内容を記入して追加してください<span class="precautionary">※は必須です</span></h3>
        <DatePicker @datetimepicker="addDate"/>
        <label for="todo" class="mt-4">作業内容<span class="todo-notice">※</span>：</label><br>
        <input type="text" id="todo" v-model="todo" class="form-control todo-form">
      </div>
        <br>
        <button class="btn btn-primary" @click="addTodoList">追加する</button>

        <transition-group name="add">
            <ul class="list-group mt-2" v-for="(todo, index) in todos" :key="index" @click="remove(index)" >
              <li class="list-group-item todo-list">
                  日時：{{ todo.date | moment }} <br>
                  作業内容：{{ todo.todo }}
              </li>
            </ul>
        </transition-group>
        <br><br>
        <hr>
        <button class="btn btn-primary" @click="confirmAlert">登録する</button>
        <br><span class="btn-note">※上記のTODOを登録します</span>
        <br><br>
        <!-- <button class="btn btn-info mt-3" @click="getTodoList">取得する</button><br>
        <br><br> -->
        <!-- <button class="btn btn-secpondary mt-3" @click="RegisterTodoArray">todoDataを登録</button><br> -->
    </div>
</template>

<script>
import firebase from '/firebase.js'
import { mapActions } from "vuex";
// import { addDays } from 'date-fns'
import DatePicker from "./DatePicker";
import moment from 'moment';

export default {
    data() {
        return {
            todo: "",
            // todos: this.$store.getters.todos,  
            date: "",
        };
    },
    components: {
      DatePicker
    },
    computed: {
        // todo: {
        //     get() {
        //         // main.jsでVueインスタンスの定義時に、Store情報を組み込むことを忘れない!
        //         return this.$store.getters.todo;
        //     },
        //     set(value) {
        //         // actionをdispatch
        //         this.$store.dispatch("updateTodo", value);
        //     },
        // },
        todos: {
            get() {
                return this.$store.getters.todos;  
            },
        },
    },
    methods: {
        errorAlert: function() {
            this.$swal('Error', "TODOを追加してください!", 'error');
        },
        confirmAlert: function() {
          if (this.todos.length === 0) {
            this.errorAlert();
          } else {
            this.$swal({
              title: "確認",
              text: "TODOを登録しますか？",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willRegister) => {
              if (willRegister) {
                this.RegisterTodoList()
                this.$swal("TODOを登録しました", {
                  icon: "success",
                });
              } else {
                this.$swal("Cancelされました。");
              }
            });
          }
        },
        addTodoList() {
          /* TODO: 日付もtodosに格納する */
            if(this.date == "") {
              this.date = new Date();
              console.log("this.date", this.date);
            }

            if(this.todo != "") {
              // this.addTodo(this.todo);
              /* Action や Mutation に第三引数という概念は無いので注意!!! オブジェクトで渡す */
              /* datetimepickerでは文字列型が渡されるのでTimeStamp型に変換する ※datepickerでは変換の必要なし */
              this.addTodo({ todo: this.todo, date: new Date(this.date) });
              this.todo= "";
              this.date= "";
            }
        },
        addDate(payload) {
            this.date = payload;
        },
        remove(index){
            this.$store.getters.todos.splice(index, 1);
        },
        /* TODO: action.jsに移動させたい(action.jsに置くとスプレッド構文でエラーになる) */
        RegisterTodoList() {
          // this.todos.forEach((todo, index) => { 
          //   this.dates.push(addDays(new Date(), index)) // 当日からindex日後
          // });
          /* 配列に要素を追加する(FieldValue.arrayUnion) */
          firebase.firestore()
          .collection("todos").doc("table").update({
          // スプレッド構文を使って、todoDataフィールド（配列）に`todos`の要素を追加
          todoData: firebase.firestore.FieldValue.arrayUnion(...this.todos),
          // dates: firebase.firestore.FieldValue.arrayUnion(...this.dates)
          })
          .then(() => {
          console.log(`追加に成功しました`);
          })
          .catch((error) => {
          console.log(`追加に失敗しました (${error})`);
          });
        },
        // getTodoList() {
        //   this.getTodo();
        // },
        RegisterTodoArray() {
          this.RegisterTodoArray();
        },
        ...mapActions(["addTodo", "getTodo", "RegisterTodoArray"]),
    },
    mounted() {
        window.addEventListener('keyup', event => {
            if (event.keyCode === 13) { 
                this.addTodoList()
            }
        });
    },
    filters: {
      moment(createdAt) {
        return moment(createdAt).format('YYYY/MM/DD HH:mm');
      },
    }
}
</script>

<style scoped lang="scss">
.app-title {
  font-style: italic;
}
.todo-h3 {
  font-style: oblique;
}
.btn-note {
  font-size: 13px;
  color: gray;
}
.todo-notice {
  color: red;
  font-weight: bold;
  margin-left: 2px;
}
.precautionary {
  margin-left: 5px;
  font-size: 18px;
  color: gray;
}
.todo-list {
  cursor: pointer;
  max-width: 400px;
  &:hover {
    z-index: 2;
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
  }
}
.todo-form {
  max-width: 400px;
}

/* Animation */
.add {
  // 要素が移動するときのアニメーション設定
  &-move {
    // 基本moveのプロパティはこれくらい
    transition: transform 0.5s;
  }
  // 要素が入るときのアニメーション
  &-enter {
    opacity: 0;
    // アニメーションの初期設定（初期値とtransitionを設定する）
    &-active {
      animation: slide-in 0.5s;
      transition: opacity 0.5s;
    }
    // アニメーション開始（目標のプロパティ値を設定する）
    &-to {
      opacity: 1;
    }
  }
  // 要素が消える時のアニメーション
  &-leave {
    opacity: 1;
    &-active {
      animation: slide-in 0.5s reverse;
      transition: opacity 0.5s;
      // 要素が消える場合はabsoluteにする（重要！）
      position: absolute;
      width: 400px;
    }
    &-to {
      opacity: 0;
    }
  }
}

// .add-move {
//   transition: transform 1s;
// }
// .add-enter {
//   opacity: 0;
// }
// .add-enter-active {
//   animation: slide-in 0.5s;
//   transition: opacity 1s;
// }
// .add-enter-to {
//   opacity: 1;
// }
// .add-leave {
//   opacity: 1;
// }
// .add-leave-active {
//   animation: slide-in 0.5s reverse;
//   transition: opacity 1s;
//   position: absolute;
//   width: 200px;
// }
// .add-leave-to {
//   opacity: 0;
// }

@keyframes slide-in {
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0);
  }
}
</style>