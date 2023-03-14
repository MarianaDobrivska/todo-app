import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ data, setModal }) => {
  const { description, title, isChecked } = data;

  const closeModal = () => {
    setModal(null);
  };

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modalBackground}>
        <h1 className={s.title}>{title}</h1>
        <h2>Description:</h2>
        <p className={s.description}>{description}</p>
        <p className={s.status}>
          Status: <input type="checkbox" checked={isChecked} readOnly />
        </p>
        <button
          type="button"
          className={s.button}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};
