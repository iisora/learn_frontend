<template>
  <div>
    <hot-table ref="testHot" :settings="hotSettings"></hot-table>
    <br>
    <button class="btn btn-primary ml-1 mb-2 mt-2" @click="updateTableData">更新</button>
  </div>
</template>
<script>
import { HotTable } from '@handsontable/vue';

export default {
    name: "handsontable",
    components: {
        HotTable
    },
    props: ["hotSettings", "testHot"],
    created: function() {
        console.log("created!!")
        this.$emit("getTableData");
    }, 
    methods: {
      updateTableData: function() {
        const tableData = this.$refs.testHot.hotInstance.getSourceData();
        // 配列の日時をString型からTimestamp型に変換する
        tableData.forEach(data => {
          if(data.date) {
            data.date = new Date(data.date);
          }
        });
        this.$emit("updateTableData", tableData);
      }
    }
}
</script>

<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>