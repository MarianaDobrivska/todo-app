import { observer } from "mobx-react-lite";
import s from "./TodoItem.module.css";
import { BsFillPlusSquareFill, BsFillXSquareFill } from "react-icons/bs";
import TodoStore from "../../../../../../store/todo";
import { useDrag } from "react-dnd";

export const TodoItem = observer(
  ({
    id,
    index,
    title,
    description,
    isChecked,
    setModalData,
    open,
    project,
    openTrash,
  }) => {
    const openModal = (e) => {
      if (
        e.target.type === "checkbox" ||
        e.target.nodeName === "path" ||
        e.target.nodeName === "svg"
      )
        return;
      open();
      setModalData({ title, description, isChecked });
    };

    const [, dragRef] = useDrag({
      type: "todo",
      item: { title, description, id, project, isChecked },
      isDragging: () => {
        openTrash(true);
      },
      end: () => {
        setTimeout(() => {
          openTrash(false);
        }, 1500);
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <tr
        className={isChecked ? s.disabled : s.tableItem}
        onClick={(e) => openModal(e)}
        ref={dragRef}
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
              TodoStore.updateTodoStatus(id, project);
            }}
          />
        </td>
        <td className={s.tableCell}>
          <button type="button">
            <BsFillPlusSquareFill className={s.tableIcon} />
          </button>
        </td>
        <td className={s.tableCell}>
          <button
            type="button"
            onClick={() => TodoStore.deleteTodo(id, project)}
          >
            <BsFillXSquareFill className={s.tableIcon} />
          </button>
        </td>
      </tr>
    );
  }
);
