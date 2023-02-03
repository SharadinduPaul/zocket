import React from "react";
import { Text } from "../../global";
import "./styles.css";

interface DropdownProps {
  title?: string;
  defaultOption: string;
  options: string[];
  selected: string;
  setSelect: (input: string) => void;
}

const Option = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <p className="dropdown-option" onClick={onClick}>
      {text}
    </p>
  );
};
export const Dropdown = ({
  title,
  defaultOption,
  options,
  selected,
  setSelect,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="dropdown-container">
      <Text faded>{title}: </Text>
      <div className="dropdown-main">
        <p>
          <span onClick={() => setOpen((prev) => !prev)}>
            {!!selected ? selected : defaultOption}
          </span>
          <span
            onClick={() =>
              !!selected ? setSelect("") : setOpen((prev) => !prev)
            }
          >
            {!!selected ? "x" : "v"}
          </span>
        </p>
        <span className={open ? "open" : ""}>
          {options.map((option, index) => (
            <Option
              key={index}
              text={option}
              onClick={() => {
                setSelect(option);
                setOpen(false);
              }}
            />
          ))}
        </span>
      </div>
    </div>
  );
};
