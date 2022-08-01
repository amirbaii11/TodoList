import { configureStore } from '@reduxjs/toolkit'
import TodosReducer from './todosSlice/TodosSlice'

export const store = configureStore({
  reducer :{
    todos: TodosReducer,
  }
})