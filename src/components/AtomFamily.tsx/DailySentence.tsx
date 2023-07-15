import React, { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { isShowSentenceState } from "../../recoil/state";

type Props = {
  sentence: {
    id: number;
    ko: string;
    en: string;
  };
};

export default function DailySentence({ sentence }: Props) {
  const { id, ko, en } = sentence;
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useRecoilState(isShowSentenceState(id));

  const handleShowClick = () => {
    setIsShow((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const target = e.currentTarget.parentNode?.nextSibling
        ?.lastChild as HTMLElement;

      (e.code === "Enter" || e.code === "NumpadEnter") &&
        target &&
        target.focus();
    },
    [],
  );

  return (
    <>
      <li>
        <div>
          {ko}
          <button onClick={handleShowClick}>보기</button>
        </div>
        <input
          style={{ width: "400px" }}
          type='text'
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyDown}
        />
        {isShow && <div>{en}</div>}
      </li>
    </>
  );
}
