import React, { useState } from "react";
import { Todo } from "../../model/todo";

type Props = {
  onAddTodo: (newTodo: Todo) => void;
};

export default function TodoItemCreator({ onAddTodo: addItem }: Props) {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem({ id: generateId(), text: inputVal, isComplete: false });
    setInputVal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputVal} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

const generateId = (): string => {
  const id = Date.now().toString();
  return id;
};
