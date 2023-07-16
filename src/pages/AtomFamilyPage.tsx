import React from "react";
import { useResetRecoilState } from "recoil";
import AFFirstChild from "../components/AtomFamily/AFFirstChild";
import AFSecondChild from "../components/AtomFamily/AFSecondChild";
import DailySentence from "../components/AtomFamily/DailySentence";
import { sampleState } from "../recoil/state";

const sentences = [
  {
    id: 1,
    ko: "우리 어디선가 만난 적이 있나요?",
    en: "do i know you from somewhere?",
  },
  { id: 2, ko: "한 잔 하실래요?", en: "do you wanna have a drink?" },

  {
    id: 3,
    ko: "난 최선을 다했지만 이룰 수 없었어요",
    en: "i did the best i could but i couldn't complete it",
  },
];

export default function AtomFamilyPage() {
  const handleClick = useResetRecoilState(sampleState("test1"));

  return (
    <section>
      <button onClick={handleClick}>Reset</button>
      <AFFirstChild />
      <AFSecondChild />
      <section>
        <ul>
          {sentences.map((sentence) => (
            <DailySentence key={sentence.id} sentence={sentence} />
          ))}
        </ul>
      </section>
    </section>
  );
}
