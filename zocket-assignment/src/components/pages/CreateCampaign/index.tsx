import React from "react";
import { Button, ContentLayout, Text, Modal } from "../../global";
import { ProgressBar } from "./components/ProgressBar";
import {
  CampaignNameData,
  CamapaignNameProps,
} from "../../../data/create-campaign-data";
import { CampaignName } from "./components/CampaignName";
import "./styles.css";
import { CampaignSettings } from "./components/CampaignSettings";
import { useNavigate } from "react-router-dom";

export const CreateCampaignPage = () => {
  const [step, setStep] = React.useState<number>(1);
  const [campaignNameSelected, setCampaignName] = React.useState<number | null>(
    null
  );
  const [modal, setModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.title = "Create your ad Campaign";
  }, []);

  const navigate = useNavigate();

  const title =
    step === 1
      ? "What you want to do?"
      : step === 2
      ? "Choose the Product"
      : step === 3
      ? "Campaign Settings"
      : "Ready to go";

  const handleSubmit = () => {
    setModal(true);
  };
  return (
    <ContentLayout>
      <Modal open={modal} onClose={() => setModal(false)}>
        <Text varient="title">Campaign Created!</Text>
        <Text faded varient="mini">
          The selected data can now be sent to backend...
        </Text>
        <div style={{ marginTop: "1rem" }}>
          <Button onClick={() => navigate("/campaign")}>Go to Campaign</Button>
        </div>
      </Modal>
      <span>
        <Text varient="title">Your Ad Campaign</Text>
        <Text varient="content" faded>
          Lauch your ad in just 3 easy steps
        </Text>
      </span>
      <div style={{ padding: "1rem 6rem" }}>
        <ProgressBar step={step} setStep={setStep} />
      </div>

      <main className="create-main">
        <div className="title">
          <Text style={{ fontWeight: "600" }}>{title}</Text>
          <Text varient="mini" faded>
            (Step {step} of 4)
          </Text>
        </div>
        <hr style={{ opacity: "0.4" }} />
        {step === 1 ? (
          <div className="create-content">
            {CampaignNameData.map((item, index) => {
              const selected = campaignNameSelected === index;
              return (
                <CampaignName
                  {...{ ...item }}
                  key={index}
                  selected={selected}
                  onClick={() => setCampaignName(selected ? null : index)}
                />
              );
            })}
          </div>
        ) : step === 2 ? (
          <></>
        ) : step === 3 ? (
          <CampaignSettings />
        ) : (
          <></>
        )}
      </main>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          style={{
            minWidth: "10rem",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => {
            step < 4 ? setStep((prev) => prev + 1) : handleSubmit();
          }}
        >
          {step === 4 ? "Start campaign" : "Continue"}
        </Button>
      </div>
    </ContentLayout>
  );
};
