import { Routes, Route } from "react-router-dom";
import { Todo } from "./components/Todo";
import { SharedLayout } from "./components/SharedLayout";
import { Done } from "./components/Done";
import { Cards } from "./components/Cards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Todo />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/done" element={<Done />} />
        <Route path="/trash" element={<h1>Trash</h1>} />
      </Route>
    </Routes>
  );
}
export default App;
