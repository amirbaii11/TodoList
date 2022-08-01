import TodoApp from "./pages/TodoApp";
import { Routes, Route } from "react-router-dom";
import EditTodos from "./components/EditTodos";
import Layout from "./Layout/Layout";
import { store } from "./features/store";
import { Provider } from "react-redux";

function App() {
return (
    <div className="px-24">
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/editTodo" element={<EditTodos />} />
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
}
// navigate('/componentB',{state:{id:1,name:'sabaoon'}});

export default App;
