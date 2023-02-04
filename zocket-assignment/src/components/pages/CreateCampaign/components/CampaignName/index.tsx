import React from "react";
import { tick } from "../../../../../assets";
import { Text } from "../../../../global";
import "./styles.css";

interface CampaignNameProps {
  icon: string;
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
}
export const CampaignName = ({
  onClick,
  selected,
  icon,
  title,
  subtitle,
}: CampaignNameProps) => {
  return (
    <div
      className={`campaign-name ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <p className="tick" style={{ opacity: selected ? "1" : "0" }}>
        <img src={tick} alt="/" />
      </p>
      <img src={icon} alt="icon" />
      <div className="content">
        <Text style={{ fontWeight: "600" }}>{title}</Text>
        <Text varient="mini" faded>
          {subtitle}
        </Text>
      </div>
    </div>
  );
};
