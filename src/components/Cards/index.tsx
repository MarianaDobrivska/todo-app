import React from "react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { CardItem } from "./components/CardItem";
import s from "./style.module.css";

interface ICard {
  id: number;
  order: number;
  title: string;
}

interface ITrashItem {
  id: number;
  title: string;
}

export const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([
    { id: 1, order: 1, title: "Card 1" },
    { id: 2, order: 2, title: "Card 2" },
    { id: 3, order: 3, title: "Card 3" },
    { id: 4, order: 4, title: "Card 4" },
  ]);

  const [trash, setTrash] = useState<ITrashItem[]>([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (item: ITrashItem) => {
      console.log(item);
      setTrash(() => (!trash.includes(item) ? [...trash, item] : trash));
      const updatedCards = cards.filter((el) => item.id !== el.id);
      setCards(updatedCards);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <h2>Cards</h2>
          <ul className={s.cardList}>
            {cards.map((card) => (
              <CardItem
                title={card.title}
                id={card.id}
                key={card.id}
                style={s.cardItem}
              />
            ))}
          </ul>
        </div>
        <div className={s.wrapper} ref={dropRef}>
          <h2>Trash</h2>
          <ul className={s.cardList}>
            {trash.map((card) => (
              <CardItem
                title={card.title}
                id={card.id}
                key={card.id}
                style={s.cardItem}
              />
            ))}
          </ul>
          {isOver && <div>Drop Here!</div>}
        </div>
      </div>
    </>
  );
};
