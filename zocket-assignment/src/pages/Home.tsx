import React from "react";
import { PageNotAvailable } from "../components/pages/PageNotAvailable";

export const Home = () => {
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <PageNotAvailable title="This website is homeless!" />
    </div>
  );
};
