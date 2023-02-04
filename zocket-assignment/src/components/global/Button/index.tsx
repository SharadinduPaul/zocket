import React from "react";
import "./styles.css";

interface ButtonProps {
  children?: any;
  style?: React.CSSProperties;
  onClick: () => void;
}
export const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style} className="button-main">
      {children}
    </button>
  );
};
