import { Todo } from "./components/Todo";
import { SharedLayout } from "./components/SharedLayout";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("todoPage");
  return (
    <SharedLayout pageChange={setCurrentPage} currentPage={currentPage}>
      {currentPage === "todoPage" && <Todo />}
      {currentPage === "cardsPage" && (
        <h1 style={{ marginLeft: "250px" }}>Cards</h1>
      )}
    </SharedLayout>
  );
}
export default App;
