export default {
    updateTodo(state, newTodo) {
        state.todo = newTodo;
    },
    // addTodo(state, todo) {
    //     state.todos.push(todo);
    // },
    addTodo(state, {todo, date}) {
        state.todos.push({
            date: date, 
            todo: todo
        });
    },
    // registerTodo(state, { id, todo }) {
    //     // addressにidが含まれた状態でstoreに格納される
    //     state.todo.id = id;
    //     state.todos.push(todo);
    // },
};