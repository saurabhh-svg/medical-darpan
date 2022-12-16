import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";

function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
