import s from "./Form.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

const initialValues = {
  title: "",
  description: "",
};

export const Form = ({ addTodo }) => {
  const [formData, setFormData] = useState({ ...initialValues });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
    const todo = {
      ...formData,
      id: nanoid(),
      isChecked: false,
    };
    console.log("ToDo:", todo);
    addTodo(todo);
    setFormData(initialValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        className={s.input}
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Enter title"
      />
      <label htmlFor="title">Description:</label>
      <input
        className={s.input}
        type="text"
        name="description"
        id="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Enter description"
      />
      <button type="submit">Add todo</button>
    </form>
  );
};
