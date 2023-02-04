import React from "react";
import { Text, DatePicker } from "../../../../global";
import "./styles.css";

interface TitleWithNumberProps {
  num: number;
  text: string;
}
const TitleWithNumber = ({ num, text }: TitleWithNumberProps) => {
  return (
    <div className="text-wth-number">
      <span>{num}</span>
      <Text style={{ fontWeight: "500" }} underline>
        {text}
      </Text>
    </div>
  );
};
export const CampaignSettings = () => {
  return (
    <div className="campaign-settings-main">
      <TitleWithNumber num={1} text="Budget and dates info" />
      <div>
        <DatePicker />
        <DatePicker />
      </div>
      <TitleWithNumber num={2} text="Location info" />
    </div>
  );
};
