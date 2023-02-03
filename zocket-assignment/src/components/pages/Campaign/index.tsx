import React from "react";
import { Router, useNavigate } from "react-router-dom";
import { add } from "../../../assets";
import { mockData, MockDataProps } from "../../../data/mock-campaign-data";
import { Button, ContentLayout, Text, Tick } from "../../global";
import { Filter } from "./components/Filters";
import { Table } from "./components/Table";
import "./styles.css";

export const CampaignPage = () => {
  const [data, setData] = React.useState<MockDataProps[]>(mockData);
  const navigate = useNavigate();
  return (
    <ContentLayout>
      <div className="champaign-head">
        <span>
          <Text varient="title">Your Campaigns</Text>
          <Text varient="content" faded>
            Check the list of campaigns you have created
          </Text>
        </span>
        <Button onClick={() => navigate("/create-campaign")}>
          <img src={add} alt="add" className="add" />
          Create new campaign
        </Button>
      </div>
      <main>
        <Filter data={mockData} setData={setData} />
        <Table {...{ data, setData }} />
      </main>
    </ContentLayout>
  );
};
