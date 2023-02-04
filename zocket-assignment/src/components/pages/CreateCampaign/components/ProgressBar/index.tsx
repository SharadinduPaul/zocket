import React from "react";
import { bucket, bulb, list, ready } from "../../../../../assets";
import "./styles.css";

interface ProgressBarProps {
  step: number;
}
interface StepCounterProps {
  icon: string;
  text: string;
  passed: boolean;
}
const StepCounter = ({ icon, text, passed }: StepCounterProps) => {
  return (
    <div
      className="stepcounter-main"
      style={{
        filter: passed
          ? "saturate(100%) brightness(100%)"
          : "saturate(0%) brightness(115%)",
      }}
    >
      <div>
        <img src={icon} alt="step" />
      </div>
      <p>{text}</p>
    </div>
  );
};
export const ProgressBar = ({ step }: ProgressBarProps) => {
  const style = { "--step": step - 1 } as React.CSSProperties;
  return (
    <div className="progress-main" style={style}>
      <StepCounter passed={step > 0} icon={bulb} text="What you want to do" />
      <StepCounter passed={step > 1} icon={bucket} text="Choose Product" />
      <StepCounter passed={step > 2} icon={list} text="Campaign Settings" />
      <StepCounter passed={step > 3} icon={ready} text="Ready to go" />
      <span className="below" />
      <span className="above" />
    </div>
  );
};
