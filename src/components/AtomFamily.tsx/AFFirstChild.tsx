import React from "react";
import { useRecoilState } from "recoil";
import { sampleState } from "../../recoil/state";

export default function AFFirstChild() {
  const [sample, setSample] = useRecoilState(sampleState("test1"));

  const handleClick = () => {
    setSample(Math.random());
  };

  return (
    <div>
      {sample}
      <button onClick={handleClick}>AFF Click</button>
    </div>
  );
}
