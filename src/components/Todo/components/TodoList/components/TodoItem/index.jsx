import s from "./TodoItem.module.css";

export const TodoItem = ({
  id,
  index,
  title,
  description,
  isChecked,
  updateTodoStatus,
  setModal,
}) => {
  const openModal = () => {
    setModal({ title, description, isChecked });
  };

  return (
    <tr
      className={s.tableItem}
      onClick={(e) => {
        if (e.target.type === "checkbox") return;
        openModal();
      }}
    >
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
    </tr>
  );
};
