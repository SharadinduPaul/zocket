import React from "react";
import "./styles.css";

interface ButtonProps {
  children?: any;
  onClick: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="button-main">
      {children}
    </button>
  );
};
