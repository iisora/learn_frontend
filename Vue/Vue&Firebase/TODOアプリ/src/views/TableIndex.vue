<template>
    <div class="container-fluid">
        <h3>TODO一覧</h3>
        <span>※TODOの削除・更新ができます。</span>
        <Handsontable :hotSettings="hotSettings" :testHot="test" @getTableData="getTableData" @updateTableData="updateTableData" />
    </div>
</template>
<script>
import firebase from '/firebase.js';
// import axios from 'axios'
import Handsontable from "./Handsontable.vue";
import { format } from 'date-fns';
// import { mapActions } from "vuex";

export default {
    name: "TableIndex",
    components: {
        Handsontable
    },
    data: () => ({
            test: "testHot",
            hotSettings: {
                // data:null,
                data:[],
                columns: [
                    // { data: "date", type: "date", placeholder: "yyyy/mm/dd"
                    // },
                    {
                    data: "date", // this is key
                    type: 'date',
                    placeholder: "yyyy/mm/dd hh:mm",
                    dateFormat: 'YYYY/MM/DD HH:mm',
                    correctFormat: true,
                    defaultDate: new Date(),
                    // datePicker additional options (see https://github.com/dbushell/Pikaday#configuration)
                        datePickerConfig: {
                            // First day of the week (0: Sunday, 1: Monday, etc)
                            firstDay: 0,
                            showWeekNumber: true,
                            numberOfMonths: 1,
                            // disableDayFn: function(date) {
                            // // Disable Sunday and Saturday
                            // return date.getDay() === 0 || date.getDay() === 6;
                            // }
                        }
                    },
                    { data: "todo", type: "text", placeholder: "シャンプーを買う"},
                    {
                        data: "status",
                        type: "dropdown",
                        source: ["未実施", "実施中", "完了"],
                        allowEmpty: true,
                    },
                ],
                licenseKey: 'non-commercial-and-evaluation',
                colHeaders: ["Date","Todo","Status"],
                rowHeaders: true,
                minSpareRows: 1, // 空行の追加、設定
                // 右クリックメニューと、行の追加、削除
                contextMenu: {
                    items: {
                        row_above: {
                            name: "上に行を挿入する"
                        },
                        row_below: {
                            name: "下に行を挿入する"
                        },
                        remove_row: {
                            name: "行を削除"
                        }
                    }   
                },
                columnSorting: true,
                /* テーブルに値を渡す前にソートしようとする?ので、意味ない */
                // columnSorting: 
                // {
                //     initialConfig: {
                //         column: 1,
                //         sortOrder: 'asc'
                //     }
                // },
                sortIndicator: true,
                colWidths: [180, 180, 80],
                // autoColumnSize: true, // カラム幅を自動調整
            },
            posts: [],
    }),
    // created() {
    //     console.log("created!!!!")
    //     this.getTableData();
    // },
    computed: {
        tableDatabase: () =>
        firebase
            .firestore()
            // .collection("todos")
            // .doc("table")  // IDを指定

            .collection('todos/table/todoData')
            .orderBy('date')
    },
    methods: {  
        getData: function() {
            /**
             * FireStoreのコレクションからデータを取得してくる。
             */
            return new Promise(resolve => {
                resolve(this.tableDatabase.get())
            });
        },
        getTableData: async function() {
            console.log("getTableData is accepted!!")
            // const { data } = await axios.get("/todos");
            // await axios.get("/todos")
            // .then(res => {
            //     console.log(res);
            //     console.log(res.data.documents);
            //     this.posts = res.data.documents;
            // });
            const tableData = await this.getData();
            // TODO: todoDataのデータを取得するように修正する。
            // const todoData = tableData.data().todos;
            // const dateData = tableData.data().dates;

            // const todoDatas = tableData.data().todoData;
            const todoDatas = tableData;
            console.log("todoDatas", todoDatas);

            // this.hotSettings.data = this.posts;
            // todoData.forEach((todo, index) => {
            todoDatas.forEach((todo) => {
            this.hotSettings.data.unshift(
                    {
                        // date: format(dateData[index].toDate(), 'yyyy/MM/dd H:mm'), 
                        // todo: todo
                        date: format((todo.date ? todo.date.toDate() : new Date()), 'yyyy/MM/dd H:mm'),
                        todo: todo.todo,
                        status: todo.status ? todo.status : "未実施" 
                    }
                );
            });
        },
        updateTableData: function(payload) {
            console.log("updateTableData is completely passed");
            const updateData = payload;
            /* todoが空の場合は配列から除く */
            const filtered = [...updateData].filter(data => data.todo);
            console.log("filtered:", filtered);
            // this.UpdateTodoList(updateData);
            // TODO: action.js持っていきたい
            // this.$store.dispatch("UpdateTodoList", updateData);

            firebase.firestore()
            .collection("todos").doc("table").set({
            // スプレッド構文を使って、todoDataフィールド（配列）に`updateData`の要素を追加
            todoData: firebase.firestore.FieldValue.arrayUnion(...filtered)
            })
            .then(() => {
            console.log(`追加に成功しました`);
            })
            .catch((error) => {
            console.log(`追加に失敗しました (${error})`);
            });

            this.$swal('SUCCESS', "更新完了しました", 'success');
        },
        // ...mapActions["UpdateTodoList"],
    },
}
</script>
<style scoped>

</style>