import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../features/todosSlice/TodosSlice";
import TodoList from "./TodoList";
import TodosForm from "./TodosForm";

const TodoApp = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const LOCAL_STORAGE_AUTH_KEY = "authState";
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    if (userData) dispatch(getTodo({ data: userData }));
  }, []);

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [todos]);
  return (
    <div className="flex flex-col justify-center items-center">
      <TodosForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
