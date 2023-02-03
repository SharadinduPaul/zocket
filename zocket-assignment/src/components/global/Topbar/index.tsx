import React from "react";
import { user } from "../../../assets";
import { Text } from "../../global";
import "./styles.css";

export const Topbar = () => {
  return (
    <div className="topbar-main">
      <Text varient="mini" faded>
        Free trial ends in 2 days
      </Text>
      <div className="user">
        <img src={user} alt="user" />
        <Text>Sharadindu Paul</Text>
      </div>
    </div>
  );
};
