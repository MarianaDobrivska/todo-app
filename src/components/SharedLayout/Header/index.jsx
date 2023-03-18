import s from "./styles.module.css";
import { HeaderIcon } from "./components/HeaderIcon";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [modal, setModal] = useState();
  const location = useLocation();

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
      <button className={s.headerBtn}>
        <HeaderIcon name={"Add"} />
      </button>
      <button className={s.headerBtn}>
        {renderSecondIcon(location.pathname)}
      </button>
    </header>
  );
};
