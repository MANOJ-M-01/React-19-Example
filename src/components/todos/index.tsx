import { useState, use } from "react";
import { fetchTodos } from "../../api/todos";
import Lists from "./lists";
import CreateTodo from "./create";
import { Todo } from "../../types/todo";

const todosPromise = fetchTodos();

const Todos = () => {
  const todosData = use(todosPromise) as Todo[];
  const [todos, setTodos] = useState<Todo[]>(todosData);

  const onSave = (text: string) => {
    setTodos([
      {
        userId: todos.length + 2,
        id: todos.length + 2,
        title: text,
        completed: false,
      },
      ...todos,
    ]);
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onStatusChange = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todos</h1>
      <CreateTodo onSave={onSave} />
      <Lists
        todos={todos}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Todos;
