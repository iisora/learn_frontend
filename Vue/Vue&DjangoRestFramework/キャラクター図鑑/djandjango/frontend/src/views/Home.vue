<template>
  <div>
    <v-container>
      <h1 class="mb-3">Picture book</h1>
        <div v-if="books.length" >
          <!--/* :sort="true"を指定しないと、gridが働かないので注意 */-->
          <draggable
            tag="v-row"
            :options="{group:'group', animation: 150}" 
            class="draggable row"
            @start="draggableStart"
            @end="draggableEnd"
            :sort="true"
          >
            <!--/* v-layoutのwrap属性で同じことができそう */-->
            <v-col
              v-for="(book, index) in books" 
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
              <v-card
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                  class="mx-auto picture_card"
                  max-width="250"
                  dark
              >
                <v-img
                  :src="card_img[index]"
                  height="200px"
                ></v-img>

                <v-card-title>
                  {{ book.name }}
                </v-card-title>

                <v-card-subtitle>
                  {{ book.description }}
                </v-card-subtitle>

                <v-card-actions>
                  <router-link
                    :to="{ name: 'book', params: { id: book.id } }"
                    class="book-link"
                  >
                    <v-btn
                      color="orange lighten-2"
                      text
                    >
                      DETAIL
                    </v-btn>
                  </router-link>
                </v-card-actions>
              </v-card>
              </v-hover>
            </v-col>
          </draggable>
          <div class="my-4">
            <p v-show="loadingBooks">表示中...</p>
            <v-btn
              v-show="next"
              @click="getBooks"
              color="success"
            >さらに表示
            </v-btn>
          </div>
        </div>
        <div v-else>
          <p>データが存在しません</p>
        </div>
    </v-container>
  </div>
</template>

<script>
// import axios from 'axios'
import draggable from 'vuedraggable'
import { apiService } from '../common/api.service';

export default {
  name: "home",
  components: { 
    draggable
  },
  data() {
    return {
      books: [],
      next: null,
      loadingBooks: false,
      card_img: [],
    }
  },
  methods: {
    getBooks() {
      let endpoint = `/api/book_list/`;
      if(this.next) {
        endpoint = this.next;
      }
      this.loadingBooks = true;
      apiService(endpoint).then(data => {
        this.books.push(...data.results);
        this.loadingBooks = false;
        const pictutes = [];
        let PictureSrc = {};
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].file !== null) {
            let arr = this.books[i].file.split("/") //スラッシュで分割して配列をつくる
            var url = require(`../../../media/${arr.slice(-1)[0]}`) //画像ファイル名は一番最後のスラッシュの後にある
          }
          PictureSrc =  url ? url : require('@/assets/img/sample.jpg');
          pictutes.push(PictureSrc)
        }
        this.card_img = pictutes;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      })
    },
    draggableStart() {
      console.log("draggableStart");
    },
    draggableEnd(event) {
      console.log("draggableEnd");
      console.log(event.from)
      console.log(event.to)
    }
  },
  created() {
    this.getBooks();
    document.title = "Picture book";
  },
  // mounted () {
  //   axios.get(`${process.env.VUE_APP_ROOT_API}api/book_list/`).then(res => this.books = res.data)
  // }
};
</script>

<style scoped lang="scss">
.book-link {
  font-weight: bold;
  color: black;
  text-decoration: none;
  &:hover {
    color: #148f87;
  }
}
.picture_card {
  &:hover {
    cursor: grab;
  }
  &:-ms-keyboard-active {
    cursor: grabbing;
  }
}
</style>
