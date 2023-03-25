import TodoStore from "../../../../store/todo";
import s from "./style.module.css";

export const DoneList = () => {
  const { todos } = TodoStore.getDoneTodos;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Your completed todos 🔥</h2>
      <ul className={s.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={s.listItem}>
            <h3 className={s.listItemTitle}>{todo.title}</h3>
            <p className={s.listItemDescription}>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
