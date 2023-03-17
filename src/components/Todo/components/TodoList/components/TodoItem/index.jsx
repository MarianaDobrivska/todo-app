import s from "./TodoItem.module.css";
import { BsFillPlusSquareFill, BsFillXSquareFill } from "react-icons/bs";

export const TodoItem = ({
  id,
  index,
  title,
  description,
  isChecked,
  updateTodoStatus,
  setModal,
  handleDelete,
}) => {
  const openModal = (e) => {
    if (
      e.target.type === "checkbox" ||
      e.target.nodeName === "path" ||
      e.target.nodeName === "svg"
    )
      return;
    setModal({ title, description, isChecked });
  };

  return (
    <tr className={s.tableItem} onClick={(e) => openModal(e)}>
      <td className={s.tableCell}>{index}.</td>
      <td className={s.tableCellText}>
        <span>{title}</span>
      </td>
      <td className={s.tableCellText}>
        <span>{description}</span>
      </td>
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
      <td className={s.tableCell}>
        <button type="button">
          <BsFillPlusSquareFill className={s.tableIcon} />
        </button>
      </td>
      <td className={s.tableCell}>
        <button type="button" onClick={() => handleDelete(id)}>
          <BsFillXSquareFill className={s.tableIcon} />
        </button>
      </td>
    </tr>
  );
};
