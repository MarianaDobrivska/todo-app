import React from "react";
import s from "./Modal.module.css";
import TodoStore from "../../../../../store/todo";
import { ModalWrapper } from "../../../../shared/Modal";

type modalProps = {
  close: ()=> void
}

export const Modal = ({ close }: modalProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return;
    const formData = new FormData(e.currentTarget);
    const projectName = formData.get("project");
    if (typeof projectName !== "string" || projectName.trim() === "") return;
    TodoStore.addProject(projectName.toString());
    close();
    e.currentTarget.reset();
  };

  return (
    <ModalWrapper close={close}>
      <form onSubmit={handleSubmit} className={s.form}>
        <h1 className={s.title}>Add Project</h1>
        <input
          className={s.input}
          type="text"
          name="project"
          placeholder="Enter project name"
        />
        <button type="submit" className={s.button}>
          Add
        </button>
      </form>
    </ModalWrapper>
  );
};
