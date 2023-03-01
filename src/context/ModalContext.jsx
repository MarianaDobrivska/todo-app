import { createContext, useState } from "react";
import { Modal } from "../components/Modal";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalComonent, setModalComponent] = useState(null);

  const closeModal = () => {
    setModalComponent(null);
  };

  return (
    <ModalContext.Provider value={setModalComponent}>
      {children}
      {modalComonent && <Modal closeModal={closeModal}>{modalComonent}</Modal>}
    </ModalContext.Provider>
  );
};
