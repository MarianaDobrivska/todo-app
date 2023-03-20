import s from "./Modal.module.css";
import TodoStore from "../../../../../store/todo";
import { ModalWrapper } from "../../../../shared/Modal";

export const Modal = ({ close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return;
    const formData = new FormData(e.target);
    const projectName = formData.get("project");
    if (projectName.trim() === "") return;
    TodoStore.addProject(projectName);
    close();
    e.target.reset();
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
