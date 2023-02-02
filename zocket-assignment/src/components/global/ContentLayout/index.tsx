import React from "react";
import "./styles.css";

interface ContentLayoutProps {
  children?: any;
}
export const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className="content-layout">{children}</div>;
};
