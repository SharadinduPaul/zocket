import React from "react";
import { PageNotAvailable } from "../components/pages/PageNotAvailable";

export const Customers = () => {
  React.useEffect(() => {
    document.title = "Customers - Zocket Dashboard";
  }, []);
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <PageNotAvailable title="Ugh.. I only got 3 days. Page Not available!" />
    </div>
  );
};
