import React from "react";
import s from "./Modal.module.css";

type modalProps = {
  description: string;
  title: string;
  isChecked: boolean;
};

export const Modal = ({ data }) => {
  const { description, title, isChecked }: modalProps = data;

  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <h2>Description:</h2>
      <p className={s.description}>{description}</p>
      <p className={s.status}>
        Status: <input type="checkbox" checked={isChecked} readOnly />
      </p>
    </>
  );
};
