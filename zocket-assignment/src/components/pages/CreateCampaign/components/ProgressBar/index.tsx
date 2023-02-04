import React from "react";
import { bucket, bulb, list, ready } from "../../../../../assets";
import "./styles.css";

interface ProgressBarProps {
  step: number;
  setStep: (input: number) => void;
}
interface StepCounterProps {
  icon: string;
  text: string;
  passed: boolean;
  onClick: () => void;
}
const StepCounter = ({ icon, text, passed, onClick }: StepCounterProps) => {
  return (
    <div
      className="stepcounter-main"
      style={{
        filter: passed
          ? "saturate(100%) brightness(100%)"
          : "saturate(0%) brightness(115%)",
      }}
      onClick={onClick}
    >
      <div>
        <img src={icon} alt="step" />
      </div>
      <p style={{ opacity: passed ? "1" : "0.4" }}>{text}</p>
    </div>
  );
};
export const ProgressBar = ({ step, setStep }: ProgressBarProps) => {
  const style = { "--step": step - 1 } as React.CSSProperties;
  return (
    <div className="progress-main" style={style}>
      <StepCounter
        passed={step > 0}
        onClick={() => setStep(step > 0 ? 1 : step)}
        icon={bulb}
        text="What you want to do"
      />
      <StepCounter
        passed={step > 1}
        onClick={() => setStep(step > 1 ? 2 : step)}
        icon={bucket}
        text="Choose Product"
      />
      <StepCounter
        passed={step > 2}
        onClick={() => setStep(step > 2 ? 3 : step)}
        icon={list}
        text="Campaign Settings"
      />
      <StepCounter
        passed={step > 3}
        onClick={() => setStep(step > 3 ? 4 : step)}
        icon={ready}
        text="Ready to go"
      />
      <span className="below" />
      <span className="above" />
    </div>
  );
};
