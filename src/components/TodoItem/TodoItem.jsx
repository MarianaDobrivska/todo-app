import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../Modal";
import s from "./TodoItem.module.css";

export const TodoItem = ({
  id,
  index,
  title,
  description,
  isChecked,
  updateTodoStatus,
}) => {
  const setModalComponent = useContext(ModalContext);

  const checkLength = (text) =>
    text.length > 15 ? text.slice(0, 15) + "..." : text;

  return (
    <tr
      className={s.tableItem}
      onClick={(e) => {
        if (e.target.type === "checkbox") return;
        setModalComponent(
          <Modal title={title} description={description} status={isChecked} />
        );
      }}
    >
      <td className={s.tableCell}>{index}.</td>
      <td className={s.tableCell}>{checkLength(title)}</td>
      <td className={s.tableCell}>{checkLength(description)}</td>
      <td className={s.tableCell}>
        <input
          type="checkbox"
          id="status"
          name="status"
          checked={isChecked}
          onChange={() => {
            updateTodoStatus(id);
          }}
        />
      </td>
    </tr>
  );
};
