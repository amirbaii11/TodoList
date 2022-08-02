import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  selected:""
};

const TodosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        id: Math.floor(Math.random() * 10000),
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      console.log("state . todos" , JSON.stringify(state.todos));
      const filteredTodos = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      state.todos = filteredTodos;
      console.log("state . todos" , JSON.stringify(state.todos.length));

    },
    updateTodo: (state, action) => {
      const todo = state.todos;
      const update = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      const updateItem = state.todos.find(
        (item) => item.id === action.payload.id
      );
      updateItem.title = action.payload.text;
      todo[update] = updateItem;
    },
    updateState: (state, action) => {
      const todo = state.todos;
      const update = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      const updateItem = state.todos.find(
        (item) => item.id === action.payload.id
      );
      updateItem.isCompleted = !updateItem.isCompleted ;
      todo[update] = updateItem;
    },
    getTodo: (state, action) => {
      if (state.todos.length ) {
        state.todos = state.todos;
      } else {
        const todo = action.payload.data;
        todo.map((item) => state.todos.push(item));
      }
    },
    selectOrder: (state, action) => {
      const newSelect =  action.payload.isCompleted
      state.selected = newSelect ;
      console.log("select is : ",JSON.stringify(state.selected));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, getTodo ,updateState , selectOrder} = TodosSlice.actions;
export default TodosSlice.reducer;