import s from "./Form.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

const initialValues = {
  title: "",
  description: "",
};

const initialClasses = {
  input: s.input,
  label: s.label,
};

export const Form = ({ addTodo }) => {
  const [formData, setFormData] = useState({ ...initialValues });
  const [classNameTitle, setClassNameTitle] = useState({ ...initialClasses });
  const [classNameDescription, setClassNameDescription] = useState({
    ...initialClasses,
  });

  const isInputValidationFailed = () => {
    if (formData.title.trim() === "") {
      setClassNameTitle({
        input: s.inputError,
        label: s.title,
      });
      return true;
    } else if (formData.description.trim() === "") {
      setClassNameDescription({
        input: s.inputError,
        label: s.description,
      });
      setClassNameTitle(initialClasses);
      return true;
    } else {
      setClassNameDescription(initialClasses);
      setClassNameTitle(initialClasses);
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInputValidationFailed()) return;
    const todo = {
      ...formData,
      id: nanoid(),
      isChecked: false,
    };
    addTodo(todo);
    setFormData(initialValues);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label
        htmlFor="title"
        id={classNameTitle.label}
        className={classNameTitle.label}
      >
        Title:
        <input
          className={classNameTitle.input}
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter title"
        />
      </label>

      <label
        htmlFor="description"
        id={classNameDescription.label}
        className={classNameDescription.label}
      >
        Description:
        <input
          className={classNameDescription.input}
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter description"
        />
      </label>

      <button type="submit" className={s.button}>
        Create
      </button>
    </form>
  );
};
