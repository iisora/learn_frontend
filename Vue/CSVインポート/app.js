
new Vue({
    el: "#app",
    data() {
        return {
            message: "",
            texts: [],
            err: false
        };
    },
    methods: {
        loadCsvFile(e) {
            let file = e.target.files[0];

            if (!file.name.match('.csv$')) {
                this.err = true;
                this.message = "CSVファイルを選択してください";
                return;
            }

            this.err = false;
            let reader = new FileReader();
            reader.readAsText(file);

            reader.onload = () => {
                let lines = reader.result.split("\n");
                let linesArr = [];
                for (let i = 0; i < lines.length; i++) {
                    linesArr[i] = lines[i].split(",");
                }
                this.texts = linesArr;
            };
        }
    }
})