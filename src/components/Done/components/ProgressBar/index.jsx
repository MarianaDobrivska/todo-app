import TodoStore from "../../../../store/todo";
import s from "./style.module.css";

export const ProgressBar = () => {
  const doneCount = TodoStore.getDoneTodos.countOfCompleted;
  const totalCount = TodoStore.allTodosCount + doneCount;
  const percentageComplete = (doneCount / totalCount) * 100;
  return (
    <div className={s.wrapper}>
      <label htmlFor="todo">Todos progress</label>
      <progress
        className={s.progressBar}
        id="todo"
        max={totalCount}
        value={doneCount}
      >
        {percentageComplete.toFixed(2)}%
      </progress>
      <p>{percentageComplete.toFixed(2)}% completed</p>
    </div>
  );
};
