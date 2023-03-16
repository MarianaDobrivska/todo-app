import { memo, useEffect, useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { ModalWrapper } from "../shared/Modal";
import { Modal } from "./components/Modal";

const LS_KEY = "todo-items";

export const Todo = memo(() => {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? {}
  );
  const [modalData, setModalData] = useState(null);

  const addTodo = ({ id, isChecked, title, description }) => {
    setTodo((prevTodo) => ({
      [id]: { title, description, isChecked },
      ...prevTodo,
    }));
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todo));
  }, [todo]);

  const updateTodoStatus = (id) => {
    setTodo((prevTodos) => {
      return {
        ...prevTodos,
        [id]: {
          ...prevTodos[id],
          isChecked: !prevTodos[id].isChecked,
        },
      };
    });
  };

  return (
    <div>
      <Form addTodo={addTodo}></Form>
      <TodoList
        todo={todo}
        updateTodoStatus={updateTodoStatus}
        setModal={setModalData}
      />
      {modalData && (
        <ModalWrapper setModal={setModalData}>
          <Modal data={modalData} />
        </ModalWrapper>
      )}
    </div>
  );
});
