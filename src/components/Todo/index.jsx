import { observer } from "mobx-react-lite";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { ModalWrapper } from "../shared/Modal";
import { Modal } from "./components/Modal";
import { useModal } from "../../hooks";
import TodoStore from "../../store/todo";
import s from "./styles.module.css";
import { Trash } from "./components/Trash";
import { useState } from "react";

export const Todo = observer(() => {
  const { isOpen, close, open, modalData, handleModalData } = useModal();
  const [isTrashOpen, setIsTrashOpen] = useState(false);
  const todos = Object.keys(TodoStore.todos);

  return (
    <div className={s.wrapper}>
      <Form />
      <ul className={s.todoList}>
        {todos.map((id) => (
          <li key={id}>
            <h3>{id}</h3>
            <TodoList
              setModalData={handleModalData}
              open={open}
              project={id}
              openTrash={setIsTrashOpen}
            />
          </li>
        ))}
      </ul>
      {isOpen && (
        <ModalWrapper close={close}>
          <Modal data={modalData} />
        </ModalWrapper>
      )}
      {isTrashOpen && <Trash closeTrash={setIsTrashOpen} />}
    </div>
  );
});
