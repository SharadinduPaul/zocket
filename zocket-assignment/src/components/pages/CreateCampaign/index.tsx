import React from "react";
import { Button, ContentLayout, Text } from "../../global";
import { ProgressBar } from "./components/ProgressBar";
import "./styles.css";

export const CreateCampaignPage = () => {
  const [step, setStep] = React.useState<number>(1);

  const title =
    step === 1
      ? "What you want to do?"
      : step === 2
      ? "Choose the Product"
      : step === 3
      ? "Campaign Settings"
      : "Ready to go";
  return (
    <ContentLayout>
      <span>
        <Text varient="title">Your Ad Campaign</Text>
        <Text varient="content" faded>
          Lauch your ad in just 3 easy steps
        </Text>
      </span>
      <div style={{ padding: "1rem 6rem" }}>
        <ProgressBar step={step} />
      </div>
      <main className="create-main">
        <div className="title">
          <Text style={{ fontWeight: "600" }}>{title}</Text>
          <Text varient="mini" faded>
            (Step {step} of 4)
          </Text>
        </div>
      </main>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{
            minWidth: "10rem",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => setStep((prev) => (prev < 4 ? prev + 1 : prev))}
        >
          {step === 4 ? "Start campaign" : "Continue"}
        </Button>
      </div>
    </ContentLayout>
  );
};
