import { useLocation } from "react-router-dom";
import s from "./styles.module.css";
import { HeaderIcon } from "./components/HeaderIcon";
import { useModal } from "../../../hooks";
import { Modal } from "./components/ProjectModal";

export const Header = () => {
  const location = useLocation();
  const { isOpen, open, close } = useModal();

  const renderSecondIcon = (path) => {
    switch (path) {
      case "/":
        return <HeaderIcon name={"Done"} />;
      case "/todos":
        return <HeaderIcon name={"Done"} />;
      case "/cards":
        return <HeaderIcon name={"Trash"} />;
      case "/done":
        return <HeaderIcon name={"Trash"} />;
      case "/trash":
        return <HeaderIcon name={"Done"} />;

      default:
        break;
    }
  };

  return (
    <header className={s.header}>
      <button onClick={open} className={s.headerBtn}>
        <HeaderIcon name={"Add"} />
      </button>
      <button className={s.headerBtn}>
        {renderSecondIcon(location.pathname)}
      </button>
      {isOpen && <Modal close={close} />}
    </header>
  );
};
