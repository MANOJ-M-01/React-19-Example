import { Todo } from "../../types/todo";

export const fetchTodos = async (): Promise<Todo[] | undefined> => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data: Todo[] = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};
