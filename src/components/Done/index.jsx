import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useModal } from "../../hooks";
import TodoStore from "../../store/todo";
import { Modal } from "./components/Modal";

export const Done = observer(() => {
  const { close, isOpen, open } = useModal();
  const doneCount = TodoStore.getDoneTodos.countOfCompleted;

  useEffect(() => {
    if (doneCount === 0) return;
    open();
    // eslint-disable-next-line
  }, [doneCount]);

  return (
    <div style={{ marginLeft: "250px" }}>
      {isOpen && <Modal close={close} />}
      {!doneCount && <h2>There are no ready tasks yet</h2>}
    </div>
  );
});
