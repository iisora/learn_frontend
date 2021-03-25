import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book.vue";
import BookEditor from "../views/BookEditor.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/book/:id",
    name: "book",
    component: Book,
    props: true
  },
  {
    path: "/editor",
    name: "editor",
    component: BookEditor,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
