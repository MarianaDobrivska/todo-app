import { memo, useState } from "react";
import { Form } from "../Form";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";

export const Todo = memo(() => {
  const [todo, setTodo] = useState({});
  const [modalData, setModalData] = useState(null);

  const addTodo = ({ id, isChecked, title, description }) => {
    setTodo((prevTodo) => ({
      [id]: { title, description, isChecked },
      ...prevTodo,
    }));
  };

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
    <>
      <Form addTodo={addTodo}></Form>
      <TodoList
        todo={todo}
        updateTodoStatus={updateTodoStatus}
        setModal={setModalData}
      />
      {modalData && <Modal data={modalData} setModal={setModalData} />}
    </>
  );
});
