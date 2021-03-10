<template>
    <div>
        <!-- <label for="datepicker">日付：</label>
        <Datepicker 
        :value="this.default"
        :format="DatePickerFormat"
        :language="ja"
        v-model="datepicker"
        name="datepicker" 
        :highlighted="highlighted"
        @input="inputDate"
        id="datepicker"
        :placeholder="DatePickerFormat"
        :clear-button="true"
        :bootstrap-styling="true"
        style="max-width: 200px;"
        /> -->
        <label class="mt-3">日時：</label>
        <VueCtkDateTimePicker
        label="日時を選択" 
        v-model="datetimepicker"
        formatted="YYYY-MM-DD HH:mm"
        format="YYYY-MM-DD HH:mm"
        :button-now-translation="'今日'"
        :overlay="true"
        :minute-interval="5"
        position="bottom"
        @input="inputDate"
        class="datetimepicker"
        />
    </div>
</template>
<script>
// import Datepicker from 'vuejs-datepicker';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
// import {ja} from 'vuejs-datepicker/dist/locale'
export default {
    components : {
        // Datepicker,
        VueCtkDateTimePicker
    },
    data: () => ({
        // default: '2021-4-01', 
        // DatePickerFormat: 'yyyy-MM-dd',
        // ja,
        // datepicker: "",
        // highlighted: {
        //     days: [6, 0], // 曜日を設定
        // },
        datetimepicker: "",
    }),
    methods: {
        inputDate() {
            // console.log(`${this.datepicker} will emitted`)
            // this.$emit("datepicker", this.datepicker);
            console.log(`${this.datetimepicker} will emitted`)
            /* ✖ボタンを押したとき、nullがemitされ、new Date(null)=1970/1/1 0:00になってしまうため */
            if (this.datetimepicker != null) { 
                this.$emit("datetimepicker", this.datetimepicker);
            }
        }
    },
}
</script>
<style scoped>
.datetimepicker {
    max-width: 300px;
    margin-left: 0;
}
</style>