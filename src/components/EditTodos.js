import { useEffect, useState } from "react";
import { getTodo, updateTodo } from "../features/todosSlice/TodosSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const EditTodos = () => {
  const location = useLocation();
  const { title, id } = location.state;
  const [editTodo, setEditTodo] = useState(title);
  const [text, setText] = useState({
    item: "",
    id: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setEditTodo(e.target.value);
  };
  const updateTo = () => {
    dispatch(updateTodo({ id: text.id, text: text.item}));
    navigate("/");
  };
  const LOCAL_STORAGE_AUTH_KEY = "authState";
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    if (userData) dispatch(getTodo({ data: userData }));
  }, [])

  useEffect(() => {
    setText({item:editTodo , id:id})
  }, [editTodo]);

  return (
    <div className="w-full flex justify-center  ">
      <ul className="flex w-full md:w-8/12  justify-center items-center">
        <div className="relative flex w-full  justify-between border-2 md:w-3/4 px-4 py-2 rounded-lg border-slate-600 mt-3">
          <div>
            <input
              className="border-2 w-full border-slate-600 rounded-md outline-none px-2"
              type="text"
              value={editTodo}
              onChange={(e, id) => changeHandler(e, id)}
            />
          </div>
          <div className="absolute flex flex-end  mr-2 right-0 ">
            <button
              onClick={() => updateTo(id, editTodo)}
              className="border-2 text-bold px-1 rounded-lg ml-2 border-emerald-700 text-emerald-700"
            >
              Done
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default EditTodos;
