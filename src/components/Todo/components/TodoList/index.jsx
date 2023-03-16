import { memo } from "react";
import { TodoItem } from "./components/TodoItem";
import s from "./TodoList.module.css";

export const TodoList = memo(({ todo, updateTodoStatus, setModal }) => {
  return (
    <table className={s.table}>
      <colgroup span="4"></colgroup>
      <thead>
        <tr>
          <th className={s.tableTitle}>ID</th>
          <th className={s.tableTitle}>TITLE</th>
          <th className={s.tableTitle}>DESCRIPTION</th>
          <th className={s.tableTitle}>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(todo).map(([id, element]) => (
          <TodoItem
            key={id}
            id={id}
            {...element}
            index={Object.keys(todo).indexOf(id) + 1}
            updateTodoStatus={updateTodoStatus}
            setModal={setModal}
          />
        ))}
      </tbody>
    </table>
  );
});
