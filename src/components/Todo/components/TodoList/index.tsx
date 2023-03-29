import React from "react";
import { observer } from "mobx-react-lite";
import { TodoItem } from "./components/TodoItem";
import s from "./TodoList.module.css";
import TodoStore from "../../../../store/todo";
import { ITodo } from "../../../../types/interface";

type todoListProps = {
  setModalData: ({ title, description, isChecked }) => void;
  open: () => void;
  project: string;
  openTrash: (arg: boolean) => void;
};

export const TodoList = observer(
  ({ setModalData, open, project, openTrash }: todoListProps) => {
    const todos: ITodo[] = Object.values(TodoStore.todos[project]);
    const setIndex = (id: string, project: string) => {
      return Object.keys(TodoStore.todos[project]).indexOf(id) + 1;
    };

    return (
      <table className={s.table}>
        <colgroup span={4}></colgroup>
        <thead>
          <tr>
            <th className={s.tableTitle}>ID</th>
            <th className={s.tableTitle}>TITLE</th>
            <th className={s.tableTitle}>DESCRIPTION</th>
            <th className={s.tableTitle}>STATUS</th>
            <th className={s.tableTitle}>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el) => (
            <TodoItem
              title={el.title}
              description={el.description}
              isChecked={el.isChecked}
              key={el.id}
              id={el.id}
              index={setIndex(el.id, project)}
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
