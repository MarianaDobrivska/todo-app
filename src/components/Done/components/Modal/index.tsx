import React, { FC } from "react";
import { ModalWrapper } from "../../../shared/Modal";
import { ProgressBar } from "../ProgressBar";
import TodoStore from "../../../../store/todo";
import s from "./style.module.css";

interface modalProp {
  close: () => void;
}

export const Modal: FC<modalProp> = ({ close }) => {
  const doneCount = TodoStore.countOfCompleted;
  const totalCount = TodoStore.allTodosCount + doneCount;
  const remaining = totalCount - doneCount;
  return (
    <ModalWrapper close={close}>
      <ul className={s.container}>
        <li className={s.thumb}>
          <p className={s.text}>
            You&aposve done: <span>{doneCount} todos</span>
          </p>
        </li>
        <li className={s.thumb}>
          <p className={s.text}>
            Remaining: <span>{remaining} todos</span>
          </p>
        </li>
      </ul>
      <ProgressBar />
    </ModalWrapper>
  );
};
