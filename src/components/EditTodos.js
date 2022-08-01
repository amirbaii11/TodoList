import { useState } from "react";
import { useLocation } from "react-router-dom";
import { updateTodo } from "../features/todosSlice/TodosSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const EditTodos = () => {
  const location = useLocation();
  const { title, id } = location.state;
  const [editTodo, setEditTodo] = useState(title);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setEditTodo(e.target.value);
  };
  const updateTo =()=>{
    dispatch(updateTodo({ id:id , text:editTodo}))
    navigate("/")
  }
  

  return (
    <div className="w-full flex justify-center  ">
      <ul className="flex w-full md:w-5/12  justify-center items-center">
        <div className="relative flex w-96  justify-between border-2 md:w-full px-4 py-2 rounded-lg border-slate-600 mt-3">
          <div>
            <input
              type="text"
              value={editTodo}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="absolute flex flex-end  mr-2 right-0 ">
            <button
              onClick={updateTo}
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
