import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import { BsFillXCircleFill } from "react-icons/bs";

const modalRoot = document.querySelector("#modal-root") as Element;

export const ModalWrapper = ({ children, close }) => {
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        close();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  return createPortal(
    <div className={s.wrapper} onClick={(e) => handleModalClose(e)}>
      <div className={s.modalBackground}>
        {children}
        <button type="button" className={s.button}>
          <BsFillXCircleFill className={s.icon} onClick={close} />
        </button>
      </div>
    </div>,
    modalRoot
  );
};
