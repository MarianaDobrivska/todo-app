import { createContext, useState } from "react";
import { ModalWrapper } from "../components/Modal";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null);

  const closeModal = () => {
    setModalComponent(null);
  };

  return (
    <ModalContext.Provider value={setModalComponent}>
      {children}
      {modalComponent && (
        <ModalWrapper closeModal={closeModal}>{modalComponent}</ModalWrapper>
      )}
    </ModalContext.Provider>
  );
};
