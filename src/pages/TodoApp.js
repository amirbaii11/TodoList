import TodoList from "./TodoList";
import TodosForm from "./TodosForm";

const TodoApp = () => {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <TodosForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
