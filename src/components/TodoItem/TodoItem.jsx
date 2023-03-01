export const TodoItem = ({
  id,
  index,
  title,
  description,
  isChecked,
  updateTodoStatus,
}) => {
  const checkLength = (text) =>
    text.length > 15 ? text.slice(0, 10) + "..." : text;

  return (
    <tr>
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
