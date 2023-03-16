import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const ModalWrapper = ({ children, setModal }) => {
  // const { description, title, isChecked } = data;

  const closeModal = () => {
    setModal(null);
  };

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modalBackground}>
        {children}
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
