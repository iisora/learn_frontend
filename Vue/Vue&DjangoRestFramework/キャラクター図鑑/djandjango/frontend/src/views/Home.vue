<template>
  <div>
    <v-container>
      <h1>Picture book</h1>
      <!-- <v-row class="home-col-contents"> -->
        <!-- <v-col md="3" class="home-col-contents-img">
        </v-col> -->
        <!-- <v-col md="9" class="home-col-contents-text"> -->
          <div v-for="book in books" :key="book.pk">
            <h2>
              <router-link
              :to="{ name: 'book', params: { id: book.id } }"
              class="book-link"
              >{{ book.name }}
              </router-link>
            </h2>
            <p>{{ book.description }}</p>
            <hr>
          </div>
          <div class="my-4">
            <p v-show="loadingBooks">ロード中です....</p>
            <v-btn
              v-show="next"
              @click="getBooks"
              color="success"
            >再度読み込み
            </v-btn>
          </div>
        <!-- </v-col> -->
      <!-- </v-row> -->
    </v-container>
  </div>
</template>

<script>
import { apiService } from '../common/api.service';
export default {
  name: "home",
  data() {
    return {
      books: [],
      next: null,
      loadingBooks: false
    }
  },
  methods: {
    getBooks() {
      let endpoint = `/api/books/`;
      if(this.next) {
        endpoint = this.next;
      }
      this.loadingBooks = true;
      apiService(endpoint).then(data => {
        this.books.push(...data);
        this.loadingBooks = false;
        if (data.next) {
          this.next = data.next;
        } else {
          this.next = null;
        }
      })
    }
  },
  created() {
    this.getBooks();
    document.title = "Picture book";
  }
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
</style>
