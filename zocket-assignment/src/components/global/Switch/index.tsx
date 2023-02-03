import React from "react";
import "./styles.css";

export const Switch = () => {
  const [selected, setSelected] = React.useState<boolean>(false);
  return (
    <div
      className={`switch-main ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    >
      <span />
    </div>
  );
};
