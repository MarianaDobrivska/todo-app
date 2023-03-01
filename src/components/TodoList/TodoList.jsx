import { TodoItem } from "../TodoItem";
import s from "./TodoList.module.css";

export const TodoList = ({ todo, updateTodoStatus }) => {
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
        {todo.map((el) => (
          <TodoItem
            key={el.id}
            {...el}
            index={todo.indexOf(el) + 1}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </tbody>
    </table>
  );
};
