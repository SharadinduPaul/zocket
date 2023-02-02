import React from "react";
import { MockDataProps } from "../../../../../data/mock-campaign-data";
import { Text, Tick } from "../../../../global";
import "./styles.css";

interface TableProps {
  data: MockDataProps[];
  setData: (input: MockDataProps[]) => void;
}
export const Table = ({ data, setData }: TableProps) => {
  const handleTick = (index: number) => {
    let localData = data.map((item, i) =>
      index === i ? { ...item, selected: !item?.selected } : item
    );
    setData(localData);
  };

  return (
    <table className="table-main">
      <thead>
        <tr>
          <th>
            <Tick selected={false} onClick={() => alert("some")} />
          </th>
          <th>On/Off</th>
          <th>Campaign</th>
          <th>Date Range</th>
          <th>Clicks</th>
          <th>Budget</th>
          <th>Location</th>
          <th>Platform</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <>
            <tr key={index}>
              <td>
                <Tick
                  selected={item?.selected}
                  onClick={() => handleTick(index)}
                />
              </td>
              <td>slide</td>
              <td>
                <div className="td-flex">
                  <img
                    src={item?.imageUrl}
                    alt={item.title}
                    className="camp-img"
                  />
                  <span>
                    <p>{item.title}</p>
                    <Text varient="content" style={{ fontSize: "12px" }} faded>
                      Created on {item?.createdOn}
                    </Text>
                  </span>
                </div>
              </td>
              <td>{item.dateRange.startDate}</td>
              <td>{item.clicks}</td>
              <td>{item.budget}</td>
              <td>{item.location}</td>
              <td>{item.platform}</td>
              <td>{item.status}</td>
              <td>del edit</td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};
