import React from "react";
import TodoStore from "../../store/todo";
import s from "./style.module.css";
import { ITodo } from "../../types/interface";

export const Trash = () => {
  const todos: ITodo[] = TodoStore.deletedTodos;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Your rubbish bin 💩</h2>
      <ul className={s.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={s.listItem}
            style={
              todo.isChecked
                ? { backgroundColor: "rgba(64, 135, 50, 0.527)" }
                : { backgroundColor: "rgba(135, 50, 50, 0.527)" }
            }
          >
            <h3 className={s.listItemTitle}>{todo.title}</h3>
            <p className={s.listItemDescription}>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
