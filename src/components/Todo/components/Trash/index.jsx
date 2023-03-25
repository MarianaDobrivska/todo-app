import { useDrop } from "react-dnd";
import sprite from "../../../../assets/sprite.svg";
import s from "./style.module.css";
import TodoStore from "../../../../store/todo";
import { useState } from "react";

export const Trash = ({ closeTrash }) => {
  const [isInTrash, setIsInTrash] = useState(false);
  const [className, setClassName] = useState(s.wrapper);
  const [, dropRef] = useDrop({
    accept: "todo",
    drop: (item) => {
      TodoStore.addToTrash(item);
      TodoStore.deleteTodo(item.id, item.project);
      setIsInTrash(true);
      setTimeout(() => {
        closeTrash(false);
      }, 1500);
    },
    hover: () => {
      setClassName(s.hoverWrapper);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className={className} ref={dropRef}>
      <p className={s.text}>
        {isInTrash ? "Moved to trash 🥳" : "Move todo to trash 💩"}
      </p>
      <svg className={s.icon}>
        {isInTrash ? (
          <use href={sprite + "#Done"} />
        ) : (
          <use href={sprite + "#Trash"} />
        )}
      </svg>
    </div>
  );
};
