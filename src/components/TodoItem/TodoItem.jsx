import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../Modal";

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
    text.length > 15 ? text.slice(0, 10) + "..." : text;

  return (
    <tr
      onClick={(e) => {
        if (e.target.type === "checkbox") return;
        setModalComponent(
          <Modal title={title} description={description} status={isChecked} />
        );
      }}
    >
      <td>{index}.</td>
      <td>{checkLength(title)}</td>
      <td>{checkLength(description)}</td>
      <td>
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
