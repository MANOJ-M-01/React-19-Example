import { useState } from "react";

type Props = {
  onSave: (text: string) => void;
};

const CreateTodo = ({ onSave }: Props) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default CreateTodo;
