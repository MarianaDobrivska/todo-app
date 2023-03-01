import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const ModalWrapper = ({ children, closeModal }) => {
  return createPortal(
    <div className={s.wrapper}>
      {children}
      <button
        type="button"
        onClick={(e) => e.target === e.currentTarget && closeModal()}
      >
        Close
      </button>
    </div>,
    modalRoot
  );
};
