import React from "react";

type Exchange = { value: string; text: string };

type Props = {
  title: string;
  name: string;
  exchangeList: Exchange[];
  onExchangeMoneySelect: (value: string, name: string) => void;
};

export default function SelectBox({
  title,
  name,
  exchangeList,
  onExchangeMoneySelect,
}: Props) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    onExchangeMoneySelect(value, name);
  };

  return (
    <>
      <h2>{title}</h2>
      <select name={name} onChange={handleSelectChange}>
        {exchangeList.map(({ value, text }, i) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
}
