import { memo, useCallback, useEffect, useState } from "react";
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

  const updateTodoStatus = useCallback(
    (id) => {
      setTodo((prevTodos) => {
        return {
          ...prevTodos,
          [id]: {
            ...prevTodos[id],
            isChecked: !prevTodos[id].isChecked,
          },
        };
      });
    },
    [todo]
  );

  const handleDelete = (todoId) => {
    const newList = { ...todo };
    delete newList[todoId];
    setTodo(newList);
  };

  return (
    <div style={{ marginLeft: "250px" }}>
      <Form addTodo={addTodo}></Form>
      <TodoList
        todo={todo}
        updateTodoStatus={updateTodoStatus}
        setModal={setModalData}
        handleDelete={handleDelete}
      />
      {modalData && (
        <ModalWrapper setModal={setModalData}>
          <Modal data={modalData} />
        </ModalWrapper>
      )}
    </div>
  );
});
