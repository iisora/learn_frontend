<template>
    <div>
        <p>
            {{ todoData }}
        </p>
        <!-- <HotTable :root="root" :settings="hotSettings" ref="testHot" class="mt-3" /> -->
        <hot-table ref="testHot" :settings="hotSettings" :data="todoData"></hot-table>
        <br>
        <button class="btn btn-primary ml-1 mb-2 mt-2" @click="getTableData">テーブルデータを取得</button>
    </div>
</template> 
<script>
// import HotTable from 'vue-handsontable-official'; // getSourceData()が使用できない？
import { HotTable } from '@handsontable/vue';
// import Handsontable from 'handsontable'; 
export default {
    // props: ["todoData", "dateData", "tableDatabase"],
    props: {
        todoData: {
            type: Array,
            default: () => []
        },
        dateData: {
            type: Array,
            default: () => []
        },
        tableDatabase: {}
    },
    components: {
        HotTable
    },   
    created: function() {
        console.log("created!!")
        this.$emit("getTodoContents");
    }, 
    data() {
        return {
            // root: "testHot",
            test: "testHot",
            hotSettings: {
                dataSchema: {
                    date: null,
                    todo: null,
                    status: null,
                },
                // data: [
                //     // TODO: [date, todo], [date, todo]のようにする。
                        // Handsontable.helper.createSpreadsheetData(4, 4),
                // ],
                data:[],
                columns: [
                    // { data: "checkbox", type: "checkbox" },
                    // TODO:  add validator
                    { data: "date", type: "text", placeholder: "yyyy/mm/dd"},
                    { data: "todo", type: "text", placeholder: "シャンプーを買う"},
                    {
                        data: "status",
                        type: "dropdown",
                        source: ["未実施", "実施中", "完了"],
                        allowEmpty: true,
                    },
                ],
                licenseKey: 'non-commercial-and-evaluation',
                // colHeaders: ["", "DATE","TODO","STATUS"],
                colHeaders: ["Date","Todo","Status"],
                // colHeaders: true,
                rowHeaders: true,
                minSpareRows: 1, // 空行の追加、設定
                // 右クリックメニューと、行の追加、削除
                contextMenu: {
                    items: {
                        row_above: true,
                        row_below: false,
                        remove_row: {
                            name: "行を削除"
                        }
                    }   
                },
                // afterChange: () => {
                //     // let hot = this.$refs.testHot.hotInstance;
                //     // console.log(hot.getSourceData());
                // },
                // afterChange: this.afterChangeVue,
            },
            hotRef: null
        };
    },  
    methods: {
        getTableData: function() {
            const tableData = this.$refs.testHot.hotInstance.getSourceData();
            console.log(tableData);
        },
        postFirebase: function(tableData) {
            return new Promise(resolve => {
                resolve(
                    this.tableDatabase.update({
                        todoData: tableData
                    })
                );
            });
        },
        // afterChangeVue: function(source) {
        //     if (source === "loadData") {
        //         console.log("source is a loadData!")
        //         return;
        //     }
        //     const tableData = this.$refs.testHot.hotInstance.getSourceData();
        //     console.log(tableData);
        //     this.$emit("updateTodoData", tableData);
        // },
    },
    mounted: function(){ 
        console.log("mounted round2!!")
    //     // setTimeout(function() {
            console.log(this.dateData)
            console.log(this.todoData)
            this.dateData.forEach((date, index) => {
                this.hotSettings.data.unshift(
                    {
                        date: date, 
                        todo: this.todoData[index]
                    }
                );
            });
    //     // }, 5000);
    },
}
</script>
<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
