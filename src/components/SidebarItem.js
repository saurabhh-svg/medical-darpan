import React, { useState } from "react";
import "./SidebarItem.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SidebarItem() {
  const [open, setOpen] = useState(true);
  return (
    <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div className="sidebar-title">
        <span>Related Category</span>
        <ArrowDropDownIcon
          className="toggle-btn"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="sidebar-list">hello</div>
    </div>
  );
}

export default SidebarItem;
