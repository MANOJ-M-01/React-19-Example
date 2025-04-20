import List from "./list";
import { Todo } from "../../../types/todo";

interface Props {
  todos: Todo[];
  onStatusChange: (id: number) => void;
  onDelete: (id: number) => void;
}

const Lists = ({ todos, onStatusChange, onDelete }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <List
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default Lists;
