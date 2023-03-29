import React from "react";
import { nanoid } from "nanoid";
import TodoStore from "../../../../store/todo";
import s from "./style.module.css";
import { List } from "./List";

export const DoneList = () => {
  const todos = Object.keys(TodoStore.doneTodos as string[]);

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
