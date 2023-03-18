import sprite from "../../../../../assets/sprite.svg";
import s from "./style.module.css";

export const HeaderIcon = ({ name }) => {
  return (
    <svg className={s.icon} id={name}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};
