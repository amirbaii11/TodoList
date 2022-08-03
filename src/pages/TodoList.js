import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, selected } = useSelector((state) => state.todos);
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(todos);
  }, [todos, selected]);
  const filterTodos = state.filter((item) => item.isCompleted !== selected);
  return (
    <div className="  w-full ">
        <div>
          {filterTodos.map((t) => (
            <Todo
              key={t.id}
              {...t}
              />
          ))}
        </div>
    </div>
  );
};

export default TodoList;
