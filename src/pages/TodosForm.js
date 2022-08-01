import { getTodo, addTodo } from "../features/todosSlice/TodosSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodosForm = () => {
  const { todos } = useSelector((state) => state.todos);
  const LOCAL_STORAGE_AUTH_KEY = "authState";
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue === "") return {};
    setInputValue("");
    dispatch(addTodo({ title: inputValue }));
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    dispatch(getTodo({ data: userData }));
  }, []);

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [todos]);

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-center w-full  "
      action="submit"
    >
      <div className="flex justify-center items-center rounded-md w-full md:w-7/12 px-8   h-16 ">
        <span className="text-semiblod">Write todo:</span>
        <input
          type="text"
          value={inputValue}
          onChange={changeHandler}
          className="ml-2  border-2 border-slate-600 outline-none  rounded-lg w-32 md:w-72 focus:border-4 focus:border-slate-700 "
          placeholder="add todos..."
        />
        <button
          type="submit"
          className="ml-2 border-2 outline-none px-2 border-slate-600 font-bold text-slate-800 rounded-lg"
        >
          add
        </button>
      </div>
    </form>
  );
};

export default TodosForm;
