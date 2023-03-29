import React from "react";
import { Routes, Route } from "react-router-dom";
import { Todo } from "./components/Todo";
import { SharedLayout } from "./components/SharedLayout";
import { Done } from "./components/Done";
import { Cards } from "./components/Cards";
import { Trash } from "./components/Trash";

function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Todo />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/done" element={<Done />} />
          <Route path="/trash" element={<Trash />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
