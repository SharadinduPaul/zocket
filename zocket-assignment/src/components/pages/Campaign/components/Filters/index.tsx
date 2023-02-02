import React from "react";
import { search as searchImg } from "../../../../../assets";
import { MockDataProps } from "../../../../../data/mock-campaign-data";
import "./styles.css";

interface FilterProps {
  data: MockDataProps[];
  setData: (input: MockDataProps[]) => void;
}
export const Filter = ({ data, setData }: FilterProps) => {
  const [search, setSearch] = React.useState<string>("");
  React.useEffect(() => {
    setData(
      data?.filter(
        (item: any) =>
          item.title.toUpperCase().indexOf(search.toUpperCase()) > -1
      )
    );
  }, [search]);
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
      <div>something</div>
    </div>
  );
};
