import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../features/todosSlice/TodosSlice";

export const local = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const LOCAL_STORAGE_AUTH_KEY = "authState";
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    if (userData == null) return [];
    console.log("setState :", userData);
    dispatch(getTodo({ data: userData }));
  }, []);

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [todos.length]);

};

