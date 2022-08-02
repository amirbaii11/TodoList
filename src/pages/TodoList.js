import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateState } from "../features/todosSlice/TodosSlice";
import { useEffect, useState } from "react";

const TodoList = () => {
  const { todos, selected } = useSelector((state) => state.todos);
  const [state, setState] = useState([])
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editHandler = (id, title) => {
    setEdit(true)
    navigate("/editTodo", { state: { title, id , edit } });
  };
  const doneHandler = (id, title) => {
    dispatch(updateState({ id: id, text: title }));
  };
  useEffect(() => {
    setState(todos);
    
  }, [todos,selected]);
const filterTodos =state.filter((item)=>item.isCompleted !== selected)
  return (
    <div className="w-7/12 ">
      <ul className="flex flex-col justify-center items-center">
        {filterTodos.map((t) => (
          <div
            key={t.id}
            className={`relative flex w-72  md:w-full justify-between ${
              t.isCompleted && "opacity-50"
            } border-2 px-4 py-2 rounded-lg border-slate-600 mt-3`}
          >
            <div>
              <li className="flex flex-wrap">{t.title}</li>
            </div>
            <div className="absolute flex flex-end  mr-2 right-0 ">
              <button
                onClick={(id, title) =>
                  editHandler((id = t.id), (title = t.title))
                }
                className="border-2 text-bold px-1 rounded-lg ml-2 border-sky-700 text-sky-700"
              >
                Edit
              </button>
              <button
                onClick={(id, title) =>
                  doneHandler((id = t.id), (title = t.title))
                }
                className={`border-2 relative text-bold w-14 px-1 rounded-lg ml-2 ${
                  t.isCompleted && " border-slate-700 text-slate-700"
                }  border-emerald-700 text-emerald-700`}
              >
                <span
                  className={`absolute inset-0 items-center justify-center ${
                    t.isCompleted && "text-xs mt-1"
                  } `}
                >
                  {t.isCompleted ? "unDone" : "done"}
                </span>
              </button>
              <button
                onClick={() => dispatch(deleteTodo({ id: t.id }))}
                className="border-2 text-bold px-1 rounded-lg ml-2  border-red-600 text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
