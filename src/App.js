import { useCallback, useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = useCallback((newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  }, []);

  const updateTodoStatus = useCallback((id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }, []);
  return (
    <>
      <Form addTodo={addTodo}></Form>
      <TodoList todo={todo} updateTodoStatus={updateTodoStatus} />
    </>
  );
}

export default App;
