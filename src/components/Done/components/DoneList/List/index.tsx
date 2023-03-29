import React from "react";
import { nanoid } from "nanoid";
import TodoStore from "../../../../../store/todo";
import s from "../style.module.css";
import { ITodo } from "../../../../../types/interface";

export const List = ({ project }) => {
  const todos: ITodo[] = Object.values(TodoStore.doneTodos[project]);

  return (
    <ul className={s.list}>
      {todos.map((todo) => (
        <li key={nanoid()} className={s.listItem}>
          <h3 className={s.listItemTitle}>{todo.title}</h3>
          <p className={s.listItemDescription}>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
};
