import { Routes, Route } from "react-router-dom";
import { Todo } from "./components/Todo";
import { SharedLayout } from "./components/SharedLayout";
import { Done } from "./components/Done";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Todo />} />
        <Route path="/todos" element={<Todo />} />
        <Route
          path="/cards"
          element={<h1 style={{ marginLeft: "250px" }}>Cards</h1>}
        />
        <Route path="/done" element={<Done />} />
        <Route
          path="/trash"
          element={<h1 style={{ marginLeft: "250px" }}>Trash</h1>}
        />
      </Route>
    </Routes>
  );
}
export default App;
