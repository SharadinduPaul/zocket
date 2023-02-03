import React from "react";
import { home } from "../../../../../assets";
import "./styles.css";

interface ProgressBarProps {
  step: number;
  progress: number;
}
interface StepCounterProps {
  icon: string;
  text: string;
}
const StepCounter = ({ icon, text }: StepCounterProps) => {
  return (
    <div className="stepcounter-main">
      <span>
        <img src={icon ? icon : home} alt="step" />
      </span>
    </div>
  );
};
export const ProgressBar = ({ step, progress }: ProgressBarProps) => {
  return (
    <div className="progress-main">
      <StepCounter icon="" text="What you want to do" />
      <span />
      <span />
      <span />
    </div>
  );
};
