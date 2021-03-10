import Vue from 'vue';
/* $npm install vue bootstrap-vue bootstrap */ 
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/* $npm install vue-swal */
import VueSwal from 'vue-swal';

import Router from 'vue-router';
/* 
router-viewでなぜかレンダリングできない時は、パスを疑う。
./views/Home/→@/views/Home/にしたら表示された。
*/ 
const TodoRegister = () => import(/* webpackChunkName: "TodoRegister" */ "./views/TodoRegister.vue");
const TodoConfirm = () => import(/* webpackChunkName: "TodoConfirm" */ "./views/TodoConfirm.vue");
// const Header = () => import(/* webpackChunkName: "Header" */ "./views/Header.vue");
const About = () => import(/* webpackChunkName: "About" */ "./views/About.vue");
// const TodoList = () => import(/* webpackChunkName: "TodoList" */ "./views/TodoList.vue");
const Comment = () => import(/* webpackChunkName: "Comment" */ "./views/Comment.vue");
const TableInedx = () => import(/* webpackChunkName: "TableIndex" */ "./views/TableIndex.vue");

Vue.use(Router);
Vue.use(BootstrapVue) 
Vue.use(VueSwal) 

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: TodoRegister,
        },
        {
            path: "/confirm/:todo",
            component: TodoConfirm,
            name: "todoConfirm",
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/list",
            component: TableInedx,
        },
        {
            path: "/comment",
            component: Comment,
        },
    ]
});


