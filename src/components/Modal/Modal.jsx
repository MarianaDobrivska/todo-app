import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, closeModal }) => {
  return createPortal(
    <div
      className={s.wrapper}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      {children}
    </div>,
    modalRoot
  );
};
