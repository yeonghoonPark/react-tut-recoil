import React from "react";

type Props = {
  exchangeTextVal: string;
  exchangeAomuntVal: number | string | undefined;
  onExchange: (value: string, amount: number) => void;
  onReset: () => void;
};

export default function ExchangeForm({
  exchangeTextVal,
  exchangeAomuntVal,
  onExchange,
  onReset,
}: Props) {
  const handleExchangeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onExchange(exchangeTextVal, Number(e.target.value));
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    onReset();
  };

  return (
    <>
      <form>
        <label htmlFor='exchange'>
          환전하실 금액({exchangeTextVal})을 입력해주세요
        </label>
        <br />
        <input
          type='number'
          id='exchange'
          value={exchangeAomuntVal}
          onChange={handleExchangeChange}
        />
      </form>
      <button onClick={handleClick}>초기화</button>
    </>
  );
}
