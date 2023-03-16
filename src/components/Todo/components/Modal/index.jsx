import s from "./Modal.module.css";

export const Modal = ({ data }) => {
  const { description, title, isChecked } = data;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <h2>Description:</h2>
      <p className={s.description}>{description}</p>
      <p className={s.status}>
        Status: <input type="checkbox" checked={isChecked} readOnly />
      </p>
    </>
  );
};
