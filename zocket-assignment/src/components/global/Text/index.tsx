import React from "react";
import "./styles.css";

interface TextProps {
  children?: any;
  className?: string;
  style?: React.CSSProperties;
  varient?: "title" | "content" | "mini";
  faded?: boolean;
  underline?: boolean;
}
export const Text = ({
  children,
  style,
  className,
  varient = "content",
  faded,
  underline,
}: TextProps) => {
  return (
    <div
      style={{
        ...style,
        opacity: faded ? "0.7" : "1",
        textDecoration: underline ? "underline" : "none",
      }}
      className={`text-main ${varient} ${className}`}
    >
      {children}
    </div>
  );
};
