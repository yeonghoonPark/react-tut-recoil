import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import NamesForm from "../components/Names/NamesForm";
import { namesState } from "../recoil/state";

export default function Names() {
  const names = useRecoilValue(namesState);
  const setNames = useSetRecoilState(namesState);

  const handleAddName = (name: string) => {
    setNames((prev) => [...prev, name]);
  };

  useEffect(() => {
    console.log(names);
  }, [names]);

  return <NamesForm onAddName={handleAddName} />;
}
