import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import items from "../data/search.json";

function Header(data) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = items.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchbar">
        <SearchIcon fontSize="medium" className="icon" />
        <input
          type="text"
          placeholder="Search Here"
          className="searchbar-bar"
          item={items}
          onchange={handleFilter}
        />
      </div>
      <div className="btn">
        <button type="Submit">Search</button>
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" href="/home" target="_blank">
                {" "}
                <p> {value.title}</p>{" "}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Header;
