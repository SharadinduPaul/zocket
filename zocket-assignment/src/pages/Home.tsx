import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/global";
import { PageNotAvailable } from "../components/pages/PageNotAvailable";

export const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = "Zocket Dashboard";
  }, []);

  return (
    <div style={{ flex: 1, position: "relative" }}>
      <PageNotAvailable title="This website is homeless!">
        <Button onClick={() => navigate("/campaign")}>
          Go to Campaign Page
        </Button>
      </PageNotAvailable>
    </div>
  );
};
