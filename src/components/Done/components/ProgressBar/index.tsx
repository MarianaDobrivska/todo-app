import React from "react";
import TodoStore from "../../../../store/todo";
import s from "./style.module.css";

export const ProgressBar = () => {
  const doneCount = TodoStore.countOfCompleted;
  const totalCount = TodoStore.allTodosCount + doneCount;
  const percentageCount = (doneCount / totalCount) * 100;
  const percentage = `${percentageCount.toFixed(2)}%`;
  return (
    <div className={s.wrapper}>
      <label htmlFor="todo">Todos progress</label>
      <progress
        className={s.progressBar}
        id="todo"
        max={totalCount}
        value={doneCount}
      >
        {percentage}
      </progress>
      <p>{percentage} completed</p>
    </div>
  );
};
