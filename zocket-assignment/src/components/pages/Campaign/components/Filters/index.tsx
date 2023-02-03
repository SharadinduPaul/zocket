import React from "react";
import { search as searchImg } from "../../../../../assets";
import {
  MockDataProps,
  platform_options,
  status_options,
} from "../../../../../data/mock-campaign-data";
import { Dropdown } from "../../../../global";
import "./styles.css";

interface FilterProps {
  data: MockDataProps[];
  setData: (input: MockDataProps[]) => void;
}
export const Filter = ({ data, setData }: FilterProps) => {
  const [search, setSearch] = React.useState<string>("");
  const [platform, setPlatform] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");

  const ApplyFilters = (item: MockDataProps) => {
    // console.log(platform, item);
    let searchPassed = true,
      platformPassed = true,
      statusPassed = true;
    if (search !== "") {
      if (item.title.toUpperCase().indexOf(search.toUpperCase()) > -1) {
        searchPassed = true;
      } else {
        searchPassed = false;
      }
    }
    if (platform !== "") {
      if (item.platform.toUpperCase() === platform.toUpperCase()) {
        platformPassed = true;
      } else {
        platformPassed = false;
      }
    }
    if (status !== "") {
      if (item.status.toUpperCase() === status.toUpperCase()) {
        statusPassed = true;
      } else {
        statusPassed = false;
      }
    }
    return searchPassed && platformPassed && statusPassed;
  };

  React.useEffect(() => {
    setData(data?.filter((item: any) => ApplyFilters(item)));
  }, [search, platform, status]);

  return (
    <div className="filter-main">
      <div className="search-main">
        <img src={searchImg} alt="magnifyer" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target?.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Dropdown
          title="Platform"
          selected={platform}
          setSelect={setPlatform}
          defaultOption={"All Platform"}
          options={platform_options}
        />
        <Dropdown
          title="Status"
          selected={status}
          setSelect={setStatus}
          defaultOption={"All Status"}
          options={status_options}
        />
      </div>
    </div>
  );
};
