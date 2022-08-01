import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../features/todosSlice/TodosSlice";

const TodoList = () => {


  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const editHandler = (id, title) => {
    navigate("/editTodo", { state: { title, id } });
  };

  return (
    <div className="w-7/12 ">
      <ul className="flex flex-col justify-center items-center">
        {todos.map((t) => (
          <div
            key={t.id}
            className="relative flex w-72 md:w-full justify-between border-2 px-4 py-2 rounded-lg border-slate-600 mt-3"
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
              <button className="border-2 text-bold px-1 rounded-lg ml-2 border-emerald-700 text-emerald-700">
                Done
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
