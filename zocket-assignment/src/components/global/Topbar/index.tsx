import React from "react";
import { user } from "../../../assets";
import "./styles.css";

export const Topbar = () => {
  return (
    <div className="topbar-main">
      <div className="user">
        <img src={user} alt="user" />
        <h6>Sharadindu Paul</h6>
      </div>
    </div>
  );
};
