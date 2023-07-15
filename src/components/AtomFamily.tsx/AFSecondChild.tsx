import React from "react";
import { useRecoilState } from "recoil";
import { sampleState } from "../../recoil/state";

export default function AFSecondChild() {
  const [sample, setSample] = useRecoilState(sampleState("test2"));

  const handleClick = () => {
    setSample(Math.random());
  };

  return (
    <div>
      {sample}
      <button onClick={handleClick}>AFS Click</button>
    </div>
  );
}
