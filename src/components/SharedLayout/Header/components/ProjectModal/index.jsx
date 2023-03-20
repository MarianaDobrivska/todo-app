import s from "./Modal.module.css";
import TodoStore from "../../../../../store/todo";
import { useNotify } from "../../../../../hooks";

export const Modal = ({ close }) => {
  const { Notification, setNotify } = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) return;
    const formData = new FormData(e.target);
    const projectName = formData.get("project");
    if (projectName.trim() === "") {
      setNotify({ status: "Warning", text: "Please enter project name" });
      return;
    }

    TodoStore.addProject(projectName);
    close();
    e.target.reset();
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.modalBackground}>
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
        </div>
      </div>
      <Notification />
    </>
  );
};
