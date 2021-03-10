<template>
    <div class="container-fluid">
        <h3>TODOリスト</h3>
        <span>※TODOの削除・更新ができます。</span>
        <Table
        :todoData="todoData"
        :dateData="dateData"
        :tableDatabase="tableDatabase"
        @getTodoContents="getTodoContents"
        @updateTodoData="updateTodoData"
        />
        <!-- <button class="btn btn-primary ml-1 mb-2 mt-2" @click="getTableData">テーブルデータを取得</button><br> -->
        <br>
        <!-- <button class="btn btn-primary ml-1 mb-2 mt-2" @click="getTodoData">TODOデータを取得</button> -->
    </div>
</template>

<script>
import axios from 'axios'
// import firebase from '/firebase.js'
import Table from "./Table";
// import { mapActions } from "vuex";
export default {
    // created() {
    //     console.log("hansontableへようこそ！");
    //     this.getTodoData();
    // },
    components: {
        Table
    },
    data() {
        return {
            todoData: [],
            dateData: [],
            tableData: [],
        };
    },
    computed: {
        tableDatabase: () =>
        firebase
            .firestore()
            .collection("todos")
            .doc("table")  // IDを指定
    },
    methods: {
        setSampleData: function() {
            return new Promise(resolve => {
                resolve(this.tableDatabase.set(testData));
            });
        },
        // getTodoData: function() {
        //     console.log(this.todoData);
        // },  
        // listenData: function() {
        //     /* リアルタイムリスナー(変更されたデータを受け取れる) */
        //     return new Promise(resolve => {
        //         resolve(
        //             this.tableDatabase.onSnapshot(data => {
        //                 this.todoData = data.data().todos;
        //                 this.dateData = data.data().dates;
        //             })
        //         );
        //     });
        // },
        getData: function() {
            /**
             * FireStoreのコレクションからデータを取得してくる。
             */
            return new Promise(resolve => {
                resolve(this.tableDatabase.get())
            });
        },
        getTodoContents: async function() {
            try {
                // await this.listenData();
                console.log("getTodoContents is completely passed");
                // const tableData = await this.getData();

                const todoData = tableData.data().todos;
                const dateData = tableData.data().dates;
                this.todoData = todoData;
                this.dateData = dateData;
                console.log(this.todoData);
                console.log(this.dateData);
            } catch (err) {
                alert(err);
            }
        },
        updateTodoData: function(payload) {
            console.log("updateTodoData is completely passed");
            this.tableData = payload;
        },
    },
    // mounted: function() {
    //     console.log("mounted round1!!")
    //     this.getTodoContents();
    // },
    // mounted: function(){
    //     /**
    //     * FireStoreからセルの値を取得する
    //     */
    //   firebase.firestore().collection("todos").limit(8).get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       let todo = {
    //         // 'id': doc.id,
    //         'todoDate': doc.data().date,
    //         'todoContent': doc.data().todo,
    //       }
    //         console.log(typeof todo.todoDate)
    //         // TODO foreachとかでループしてpushしていく。(複数の連想配列(Dictionary)の操作)
    //         // this.hotSettings.data.push(todo);
    //         // this.hotSettings.columns[1].push(todo.todoDate);
    //         // this.hotSettings.columns[2].push(todo.todoContent);

    //         // dataのtodoに格納する
    //         this.todoData.push(todo);
    //     });
    //   });
    // },
}
</script>

<style scoped>

</style>