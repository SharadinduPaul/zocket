import React from "react";
import "./styles.css";

interface SwitchProps {
  select: boolean;
  onClick: () => void;
}
export const Switch = ({ select, onClick }: SwitchProps) => {
  return (
    <div
      className={`switch-main ${select ? "selected" : ""}`}
      onClick={onClick}
    >
      <span />
    </div>
  );
};
