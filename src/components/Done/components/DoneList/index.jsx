import { nanoid } from "nanoid";
import TodoStore from "../../../../store/todo";
import s from "./style.module.css";
import { List } from "./components/List";

export const DoneList = () => {
  // const todos = TodoStore.doneTodos;
  const todos = Object.keys(TodoStore.doneTodos);

  return (
    <>
      <h2 className={s.title}>Your completed todos 🔥</h2>
      <ul className={s.projectWrapper}>
        {todos.map((project) => (
          <li key={nanoid()}>
            <h2 className={s.projectTitle}>{project}</h2>
            <List project={project} />
          </li>
        ))}
      </ul>
    </>
  );
};
