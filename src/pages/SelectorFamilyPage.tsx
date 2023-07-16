import React, { useState, useCallback } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import ExchangeForm from "../components/SelectorFamily/ExchangeForm";
import SelectBox from "../components/SelectorFamily/SelectBox";
import { exchangeState, KRWState } from "../recoil/state";

const exchangeList = [
  { value: "default", text: "선택" },
  { value: "KRW", text: "KRW" },
  { value: "USD", text: "USD" },
  { value: "YEN", text: "YEN" },
  { value: "PHP", text: "PHP" },
];

export default function SelectorFamilyPage() {
  const [KRW, setKRW] = useRecoilState(KRWState);
  const [USD, setUSD] = useRecoilState(exchangeState("USD"));
  const [YEN, setYEN] = useRecoilState(exchangeState("YEN"));
  const [PHP, setPHP] = useRecoilState(exchangeState("PHP"));

  const [exchangeVal, setExchangeVal] = useState("default");
  const [exchangedVal, setExchangedVal] = useState("default");

  const handleReset = useResetRecoilState(KRWState);

  const handleExchangeMoneySelect = useCallback(
    (value: string, name: string): void => {
      name === "exchange" ? setExchangeVal(value) : setExchangedVal(value);
    },
    [],
  );

  const handleExchange = useCallback(
    (value: string, amount: number): void => {
      switch (value) {
        case "KRW":
          return setKRW(Number(amount));
        case "USD":
          return setUSD(Number(amount));
        case "YEN":
          return setYEN(Number(amount));
        case "PHP":
          return setPHP(Number(amount));
        default:
          new Error("something wrong...");
      }
    },
    [setKRW, setPHP, setUSD, setYEN],
  );

  const returnMoneyType = useCallback(
    (value: string): number | undefined => {
      switch (value) {
        case "KRW":
          return KRW;
        case "USD":
          return USD;
        case "YEN":
          return YEN;
        case "PHP":
          return PHP;
        default:
          new Error("something wrong...");
      }
    },
    [KRW, PHP, USD, YEN],
  );

  return (
    <>
      <SelectBox
        name='exchange'
        title='환전하실 국가의 화폐를 선택하세요'
        exchangeList={exchangeList}
        onExchangeMoneySelect={handleExchangeMoneySelect}
      />

      {exchangeVal !== "default" && (
        <>
          <ExchangeForm
            exchangeTextVal={exchangeVal}
            exchangeAomuntVal={returnMoneyType(exchangeVal)}
            onExchange={handleExchange}
            onReset={handleReset}
          />

          <SelectBox
            name='exchanged'
            title='환전 받으실 국가의 화폐를 선택하세요'
            exchangeList={exchangeList}
            onExchangeMoneySelect={handleExchangeMoneySelect}
          />

          {exchangedVal !== "default" && (
            <ul>
              <li>{returnMoneyType(exchangedVal)}</li>
            </ul>
          )}
        </>
      )}
    </>
  );
}
