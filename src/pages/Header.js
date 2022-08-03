import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectOrder } from "../features/todosSlice/TodosSlice";

const Header = () => {
  const location = useLocation()
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const changeHandler = (e) => {
    switch (e.target.value) {
      case "completed":{
       return (
        dispatch(selectOrder({ isCompleted:false }))
       )
      }
      case "Notcompleted":{
        return (
         dispatch(selectOrder({ isCompleted:true }))
       )
      }
      case "All":{
        return (
          dispatch(selectOrder({ isCompleted:"" }))
        )
      }
      default:
        break;
    }
  };
  useEffect(() => {
    setState(todos);
  }, [todos]);


  return (
    <header
      className="flex justify-center w-full h-16 rounded-md  bg-slate-800"
      action="submit"
    >
      <div className="flex relative justify-center items-center rounded-md w-full md:w-8/12 px-8   h-16 bg-slate-400">
        <div className={`flex left-4 absolute ${location.pathname.length>1 ? "hidden" : ""}   md:left-8`}>
          <label htmlFor="todo" className="hidden xl:block mr-1" >
            order by:
          </label>

          <select
            onChange={(e) => changeHandler(e)}
            name="todo"
            id="todo"
            className=" bg-transparent outline-none w-14 sm:w-auto md:w-16 border-2 rounded-lg xs:w-12 sm:w-16 md:w-16 lg:w-36"
          >
            <option value="All">ALL</option>
            <option value="completed">completed</option>
            <option value="Notcompleted">Not completed</option>
          </select>
        </div>
        <div className="">
          <p>Welcome to Todos List</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
