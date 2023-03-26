import { observer } from "mobx-react-lite";
import { TodoItem } from "./components/TodoItem";
import s from "./TodoList.module.css";
import TodoStore from "../../../../store/todo";

export const TodoList = observer(
  ({ setModalData, open, project, openTrash }) => {
    const todos = Object.entries(TodoStore.todos[project]);
    const setIndex = (id, project) => {
      return Object.keys(TodoStore.todos[project]).indexOf(id) + 1;
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
            {/* <th className={s.tableTitle}>TIMETRACKER</th> */}
            <th className={s.tableTitle}>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(([id, el]) => (
            <TodoItem
              key={id}
              id={id}
              {...el}
              index={setIndex(id, project)}
              setModalData={setModalData}
              open={open}
              project={project}
              openTrash={openTrash}
            />
          ))}
        </tbody>
      </table>
    );
  }
);
