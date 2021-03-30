<template>
    <div>
        <v-container fill-height>
            <v-row class="book-contents" align="center">
                <v-col md="4" class="book-contents-img mb-16">
                    <v-img 
                    :src="imgSrc"
                    class="img-fluid"
                    max-width="400"
                    max-height="400"
                    ></v-img>
                </v-col>
                <v-col md="8" class="book-contents-text">
                    <h2 class="mb-5">{{ book.name }}</h2>
                    <p>身長: {{ book.height }}cm</p>
                    <p>体重: {{ book.weight }}kg</p>
                    <p>出身地: {{ book.Habitat }}</p>
                    <p>職業: {{ book.job }}</p>
                    <p>概要: {{ book.description }}</p>
                    <v-btn
                        color="success"
                        class="mr-2"
                        :to="{name: 'editor', params: { id: book.id, src: imgSrc } }"
                    >編集
                    </v-btn>
                    <v-btn
                        color="error"
                        @click="deleteBookData"
                    >削除
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="mb-16"></v-row>
            <v-row class="mb-16"></v-row>
            <v-row class="mb-7"></v-row>
        </v-container>
    </div>
</template>

<script>
import { apiService } from '../common/api.service';

export default {
    name: 'book',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            book: {},
            imgSrc: ''
        }
    },
    methods: {
        setPageTitle(title) {
            document.title = title;
        },
        getBookData() {
            let endpoint = `/api/book_list/${this.id}/`;
            apiService(endpoint).then(data => {
                this.book = data;
                let url = data.file;
                console.log("url", url);
                if (url !== null) {
                    let arr = url.split("/") //スラッシュで分割して配列をつくる
                    this.imgSrc = require(`../../../media/${arr.slice(-1)[0]}`) //リポジトリ名は一番最後のスラッシュの後にある
                } else {
                    this.imgSrc = require("../assets/img/sample.jpg");
                }
                this.setPageTitle(data.name);
            })
        },
        deleteBookData() {
            let endpoint = `/api/book_list/${this.id}/`;
            apiService(endpoint, "DELETE").then(() => {
                this.$router.push({
                    name: "home"
                })
            })
        }
    },
    created() {
        this.getBookData();
    }
}
</script>

<style scoped lang="scss">
.book-contents {
  margin-top: 20px;
  justify-content: center;
  
  &-img {
    text-align: center;
  }

  &-text {
    word-wrap: break-word;
  }
}
</style>
