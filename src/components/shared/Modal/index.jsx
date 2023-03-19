import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export const ModalWrapper = ({ children, close }) => {
  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modalBackground}>
        {children}
        <button
          type="button"
          className={s.button}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};
