import React from "react";
import "./styles.css";

interface ButtonProps {
  children?: any;
  style?: React.CSSProperties;
  bgc?: string;
  color?: string;
  onClick: () => void;
}
export const Button = ({
  children,
  style,
  bgc,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        color: color ? color : "#fff",
        backgroundColor: bgc ? bgc : "",
      }}
      className="button-main"
    >
      {children}
    </button>
  );
};
