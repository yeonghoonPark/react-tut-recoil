import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil/state';

export default function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState);
  const [inputVal, setInputVal] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = { id: generateId(), text: inputVal, isComplete: false };
    setTodoList((prev) => [...prev, newTodo]);
    setInputVal('');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleChange} />
        <button>Add</button>
      </form>
    </section>
  );
}

const generateId = (): string => {
  const id = Date.now().toString();
  return id;
};
