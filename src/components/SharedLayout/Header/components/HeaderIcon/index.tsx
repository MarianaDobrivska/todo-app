import React from "react";
import clsx from "clsx";
import sprite from "../../../../../assets/sprite.svg";
import s from "./style.module.css";

type iconProps = {
  name: string;
};

export const HeaderIcon = ({ name }: iconProps) => {
  const getClassName = () => clsx(s.icon, name === "Done" && s.doneIcon);

  return (
    <svg className={getClassName()} id={name}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};
