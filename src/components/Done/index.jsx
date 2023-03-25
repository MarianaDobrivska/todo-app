import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useModal } from "../../hooks";
import TodoStore from "../../store/todo";
import { Modal } from "./components/Modal";
import { DoneList } from "./components/DoneList";
import Draggable from "react-draggable";

export const Done = observer(() => {
  const { close, isOpen, open } = useModal();
  const doneCount = TodoStore.getDoneTodos.countOfCompleted;

  useEffect(() => {
    if (doneCount === 0) return;
    open();
    // eslint-disable-next-line
  }, [doneCount]);

  return (
    <>
      {isOpen && <Modal close={close} />}
      {!doneCount && (
        <Draggable>
          <h2>There are no ready tasks yet</h2>
        </Draggable>
      )}
      {!isOpen && <DoneList />}
    </>
  );
});
