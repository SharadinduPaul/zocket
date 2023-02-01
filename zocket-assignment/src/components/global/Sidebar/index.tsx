import React from "react";
import { Link } from "react-router-dom";
import { rocket, home, products, campaign, customers } from "../../../assets";
import "./styles.css";

//sidebar icon component
interface SidebarIconProps {
  imgSrc: any;
  title: string;
  link: string;
  selected?: boolean;
  onClick: () => void;
}
const SidebarIcon = ({
  title,
  imgSrc,
  link = "",
  selected = false,
  onClick,
}: SidebarIconProps) => {
  return (
    <div
      className={`sidebar-icon ${selected ? "selected" : "not-selected"}`}
      onClick={onClick}
    >
      <Link to={link} style={{ textDecoration: "none" }}>
        <img src={imgSrc} alt={title} />
        <h6>{title}</h6>
      </Link>
    </div>
  );
};

export const Sidebar = () => {
  const [select, setSelect] = React.useState(0);
  //this useeffect changes the selected icon when directed redirected to any non-index page
  React.useEffect(() => {
    const url = window.location.pathname;
    if (url === "/campaign") {
      setSelect(1);
    } else if (url === "/products") {
      setSelect(2);
    } else if (url === "/customers") {
      setSelect(3);
    }
  }, []);

  return (
    <div className="sidebar-main">
      <div className="logo">
        <img src={rocket} alt="rocket" />
      </div>
      <div>
        <SidebarIcon
          title="Home"
          imgSrc={home}
          link="/"
          onClick={() => setSelect(0)}
          selected={select === 0}
        />
        <SidebarIcon
          title="Campaign"
          imgSrc={campaign}
          link="/campaign"
          onClick={() => setSelect(1)}
          selected={select === 1}
        />
        <SidebarIcon
          title="Products"
          imgSrc={products}
          link="/products"
          onClick={() => setSelect(2)}
          selected={select === 2}
        />
        <SidebarIcon
          title="Customers"
          imgSrc={customers}
          link="/customers"
          onClick={() => setSelect(3)}
          selected={select === 3}
        />
      </div>
    </div>
  );
};
