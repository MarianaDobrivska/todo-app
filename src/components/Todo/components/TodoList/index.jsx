import { memo } from "react";
import { TodoItem } from "./components/TodoItem";
import s from "./TodoList.module.css";

export const TodoList = memo(
  ({ todo, updateTodoStatus, setModal, handleDelete }) => {
    const todos = Object.entries(todo);
    const setIndex = (id) => {
      return Object.keys(todo).indexOf(id) + 1;
    };

    return (
      <table className={s.table}>
        <colgroup span="4"></colgroup>
        <thead>
          <tr>
            <th className={s.tableTitle}>ID</th>
            <th className={s.tableTitle}>TITLE</th>
            <th className={s.tableTitle}>DESCRIPTION</th>
            <th className={s.tableTitle}>STATUS</th>
            <th className={s.tableTitle}>TIMETRACKER</th>
            <th className={s.tableTitle}>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(([id, element]) => (
            <TodoItem
              key={id}
              id={id}
              {...element}
              index={setIndex(id)}
              updateTodoStatus={updateTodoStatus}
              setModal={setModal}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
);
