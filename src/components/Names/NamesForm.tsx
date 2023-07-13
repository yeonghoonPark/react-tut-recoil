import React, { useState } from "react";

type Props = {
  onAddName: (name: string) => void;
};

export default function NamesForm({ onAddName }: Props) {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddName(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={handleNameChange} />
      <button>Add Name</button>
    </form>
  );
}
