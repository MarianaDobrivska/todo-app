import clsx from "clsx";
import sprite from "../../../../../assets/sprite.svg";
import s from "./style.module.css";

export const HeaderIcon = ({ name }) => {
  const getClassName = () => clsx(s.icon, name === "Done" && s.doneIcon);

  return (
    <svg className={getClassName()} id={name}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};
