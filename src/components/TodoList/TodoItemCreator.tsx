import React, { useState } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/state";

export default function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const newTodo = { id: generateId(), text: inputVal, isComplete: false };
    setTodoList((prev) => [...prev, newTodo]);
    setInputVal("");
  };

  const handleReset = useResetRecoilState(todoListState);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputVal} onChange={handleChange} />
        <button type='submit' onSubmit={handleSubmit}>
          Add
        </button>
        <button type='button' onClick={handleReset}>
          Reset
        </button>
      </form>
    </section>
  );
}

const generateId = (): string => {
  const id = Date.now().toString();
  return id;
};
