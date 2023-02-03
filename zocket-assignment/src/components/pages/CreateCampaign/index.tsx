import React from "react";
import { ContentLayout, Text } from "../../global";
import { ProgressBar } from "./components/ProgressBar";
import "./styles.css";

export const CreateCampaignPage = () => {
  const [step, setStep] = React.useState<number>(0);
  const [progress, setProgress] = React.useState<number>(0);
  return (
    <ContentLayout>
      <span>
        <Text varient="title">Your Ad Campaign</Text>
        <Text varient="content" faded>
          Lauch your ad in just 3 easy steps
        </Text>
      </span>
      <ProgressBar {...{ step, progress }} />
    </ContentLayout>
  );
};
