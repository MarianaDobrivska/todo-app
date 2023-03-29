import React from "react";
import { useDrag } from "react-dnd";

type CardItemProps = {
  title: string;
  id: number;
  style: string;
};

export const CardItem = ({ title, id, style }: CardItemProps) => {
  const [, dragRef] = useDrag({
    type: "card",
    item: { title, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <li ref={dragRef} className={style}>
      <h3>{title}</h3>
    </li>
  );
};
