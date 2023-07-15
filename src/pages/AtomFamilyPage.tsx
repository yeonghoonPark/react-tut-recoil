import React from "react";

type Props = {
  elementId: any;
};

export default function AtomFamilyPage({ elementId }: Props) {
  return (
    <div>
      <h1>Element: {elementId}</h1>
    </div>
  );
}
