import React from "react";
import { tick } from "../../../assets";
import "./styles.css";

interface TickProps {
  selected: boolean;
  onClick: () => void;
}
export const Tick = ({ selected, onClick }: TickProps) => {
  return (
    <div
      className={`tick-main ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={tick} alt="tick" />
    </div>
  );
};
