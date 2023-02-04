import React from "react";
import {
  delete_,
  edit,
  facebook,
  google,
  instagram,
  rocket,
  youtube,
} from "../../../../../assets";
import { MockDataProps } from "../../../../../data/mock-campaign-data";
import { Switch, Text, Tick } from "../../../../global";
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

  const handleDelete = (index: number) => {
    let localData = data.filter((item, i) => index !== i);
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
        {data.map((item, index) => {
          let platformicon, capsuleColor;
          if (item?.platform === "facebook") {
            platformicon = facebook;
          } else if (item?.platform === "instagram") {
            platformicon = instagram;
          } else if (item?.platform === "google") {
            platformicon = google;
          } else if (item?.platform === "youtube") {
            platformicon = youtube;
          }
          if (item?.status === "Exausted") {
            capsuleColor = "var(--cherry-color)";
          } else if (item?.status === "Paused") {
            capsuleColor = "var(--mustard-color)";
          }
          if (item?.status === "Live now") {
            capsuleColor = "var(--lime-color)";
          }
          const style = { "--color": capsuleColor } as React.CSSProperties;
          return (
            <>
              <tr key={index}>
                <td>
                  <Tick
                    selected={item?.selected}
                    onClick={() => handleTick(index)}
                  />
                </td>
                <td>
                  <Switch />
                </td>
                <td>
                  <div className="td-flex">
                    <img
                      src={item?.imageUrl}
                      alt={item.title}
                      className="camp-img"
                    />
                    <span>
                      <p>{item.title}</p>
                      <Text varient="mini" faded>
                        Created on {item?.createdOn}
                      </Text>
                    </span>
                  </div>
                </td>
                <td>
                  {item?.dateRange?.startDate} - {item?.dateRange?.endDate}
                </td>
                <td>{item.clicks}</td>
                <td>INR {item.budget}</td>
                <td>{item.location}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "5rem",
                  }}
                >
                  <img
                    src={platformicon}
                    className="platform-icon"
                    alt="platform"
                  />
                </td>
                <td>
                  <div className="capsule-text" style={style}>
                    {item?.status}
                  </div>
                </td>
                <td>
                  <div className="action">
                    <img src={edit} alt="edit" />
                    <img
                      src={delete_}
                      alt="del"
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};
