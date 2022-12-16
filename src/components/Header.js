import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import items from "../data/search.json";

function Header(item) {
  return (
    <div className="search">
      <div className="searchbar">
        <SearchIcon fontSize="medium" className="icon" />
        <input type="text" placeholder="Search Here" item={items} />
      </div>
      <div className="btn">
        <button type="Submit">Search</button>
      </div>
    </div>
  );
}

export default Header;
