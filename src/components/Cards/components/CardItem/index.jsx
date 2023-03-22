import { useDrag } from "react-dnd";

export const CardItem = ({ title, id, style }) => {
  const [ dragRef] = useDrag({
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

// draggable={true}
// onDragStart={(e) => dragStartHandler(e, card)}
// onDragOver={(e) => dragOverHandler(e)}
// onDragLeave={(e) => dragEndHandler(e)}
// onDragEnd={(e) => dragEndHandler(e)}
// onDrop={(e) => dropHandler(e, card)}
