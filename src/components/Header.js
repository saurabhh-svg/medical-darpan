import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
function Header() {
  return (
    <div className="searchbar">
      <SearchIcon fontSize="medium" />
      <input type="text" placeholder="Search Here" />
    </div>
  );
}

export default Header;
