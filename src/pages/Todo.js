import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateState } from "../features/todosSlice/TodosSlice";

const Todo = ({ title, id, isCompleted}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editHandler = (title, id) => {
    navigate("/editTodo",{state:{title,id}});
  };
  return (
    <div>
      <ul className="flex flex-col justify-center items-center">
        <div
          className={`relative flex w-full sm:w-10/12 md:w-7/12 justify-between ${
            isCompleted && "opacity-50"
          } border-2 px-4 py-2 rounded-lg border-slate-600 mt-3`}
        >
          <div className="w-8">
            <li className="flex flex-wrap">{title}</li>
          </div>
          <div className="absolute flex flex-end  mr-1 right-0 ">
            <button
              onClick={() => editHandler(title, id)}
              className="border-2  px-1 rounded-lg  border-sky-700 text-sky-700"
            >
              Edit
            </button>
            <button
               onClick={() => dispatch(updateState({ id: id }))}
              className={`border-2 relative text-bold w-14 px-1 rounded-lg ml-1 ${
                isCompleted && " border-slate-700 text-slate-700"
              }  border-emerald-700 text-emerald-700`}
            >
              <span
                className={`absolute inset-0 items-center justify-center ${
                  isCompleted && "text-xs mt-1"
                } `}
              >
                {isCompleted ? "unDone" : "done"}
              </span>
            </button>
            <button
              onClick={() => dispatch(deleteTodo({ id: id }))}
              className="border-2 text-bold px-1 rounded-lg ml-1  border-red-600 text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Todo;
