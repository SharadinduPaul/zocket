import React from "react";
import "./styles.css";

interface TextProps {
  children?: any;
  style?: React.CSSProperties;
  varient?: "title" | "content" | "mini";
  faded?: boolean;
}
export const Text = ({
  children,
  style,
  varient = "content",
  faded,
}: TextProps) => {
  return (
    <div
      style={{ ...style, opacity: faded ? "0.7" : "1" }}
      className={"text-main " + varient}
    >
      {children}
    </div>
  );
};
