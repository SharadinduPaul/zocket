import React from "react";
import { PageNotAvailable } from "../components/pages/PageNotAvailable";

export const Products = () => {
  React.useEffect(() => {
    document.title = "Products - Zocket Dashboard";
  }, []);
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <PageNotAvailable title="Products page is not available either!" />
    </div>
  );
};
