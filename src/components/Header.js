import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div>
      <SearchIcon fontSize="medium" />
      <input type="text" placeholder="Search Here" />
    </div>
  );
}

export default Header;
