import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        id: Math.floor(Math.random() * 100),
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (t) => t.id !== action.payload.id
      );
      state.todos = filteredTodos;
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
      if (state.todos.length) {
        state.todos = state.todos;
      } else {
        const todo = action.payload.data;
        todo.map((item) => state.todos.push(item));
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, getTodo ,updateState} = TodosSlice.actions;
export default TodosSlice.reducer;
