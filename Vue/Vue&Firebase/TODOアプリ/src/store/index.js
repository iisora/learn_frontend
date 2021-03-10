import Vue from 'vue';
import Vuex from 'vuex';
import count from "./modules/count";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todo: "",
        todos: [],
    },
    getters,
    mutations,
    actions,
    modules: {
        count,
    },
});