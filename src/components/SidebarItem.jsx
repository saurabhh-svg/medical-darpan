import React, { useState } from "react";
import "./SidebarItem.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SidebarItem({ item }) {
  console.log(item);
  const [open, setOpen] = useState(true);
  return (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div className="sidebar-title">
        <span>{item.title}</span>
        {item.childrens && (
          <ArrowDropDownIcon
            className="toggle-btn"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <div className="sidebar-list">
        {item.childrens &&
          item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
      </div>
    </div>
  );
}

export default SidebarItem;
