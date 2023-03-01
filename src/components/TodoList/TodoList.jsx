import { TodoItem } from "../TodoItem";

export const TodoList = ({ todo, updateTodoStatus }) => {
  return (
    <table>
      <colgroup span="4"></colgroup>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {todo.map((el) => (
          <TodoItem
            key={el.id}
            {...el}
            index={todo.indexOf(el) + 1}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </tbody>
    </table>
  );
};
