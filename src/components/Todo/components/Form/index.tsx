import React from "react";
import s from "./Form.module.css";
import { memo, useState } from "react";
import { nanoid } from "nanoid";
import TodoStore from "../../../../store/todo";
import { useNotify } from "../../../../hooks";

const initialClasses = {
  input: s.input,
  label: s.label,
};

export const Form = memo(() => {
  const { isNotificationOpen, Notification, setNotify } = useNotify();

  const [classNameTitle, setClassNameTitle] = useState({ ...initialClasses });
  const [classNameDescription, setClassNameDescription] = useState({
    ...initialClasses,
  });

  const isInputValidationFailed = (title, description) => {
    if (title.trim() === "") {
      setClassNameTitle({
        input: s.inputError,
        label: s.titleError,
      });
      setClassNameDescription(initialClasses);
      return true;
    } else if (description.trim() === "") {
      setClassNameDescription({
        input: s.inputError,
        label: s.descriptionError,
      });
      setClassNameTitle(initialClasses);
      return true;
    } else {
      setClassNameDescription(initialClasses);
      setClassNameTitle(initialClasses);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    if (isInputValidationFailed(title, description)) return;

    const todo = {
      title,
      description,
      id: nanoid(),
      isChecked: false,
    };
    TodoStore.addTodo(todo);
    setNotify({ status: "Info", text: "Todo added successfully" });
    e.target.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label id={classNameTitle.label} className={classNameTitle.label}>
        Title:
        <input
          className={classNameTitle.input}
          type="text"
          name="title"
          placeholder="Enter title"
        />
      </label>

      <label
        id={classNameDescription.label}
        className={classNameDescription.label}
      >
        Description:
        <input
          className={classNameDescription.input}
          type="text"
          name="description"
          placeholder="Enter description"
        />
      </label>

      <button type="submit" className={s.button}>
        Create
      </button>
      {isNotificationOpen && <Notification />}
    </form>
  );
});
