import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useModal } from "../../hooks";
import TodoStore from "../../store/todo";
import { Modal } from "./components/Modal";
import { DoneList } from "./components/DoneList";
import Draggable from "react-draggable";

export const Done = observer(() => {
  const { close, isOpen, open } = useModal();
  const doneCount = TodoStore.countOfCompleted;

  useEffect(() => {
    if (doneCount === 0) return;
    open();
    // eslint-disable-next-line
  }, [doneCount]);

  return (
    <div style={{ paddingRight: "30px" }}>
      {isOpen && <Modal close={close} />}
      {!doneCount && (
        <Draggable>
          <h2 style={{ marginTop: "20px" }}>There are no ready tasks yet 😢</h2>
        </Draggable>
      )}
      {doneCount > 0 && !isOpen && <DoneList />}
    </div>
  );
});
