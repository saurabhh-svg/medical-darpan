import { Wrap } from "@chakra-ui/react";
import React, { useState } from "react";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";
import "./home.css";

function Home() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="super-container">
      
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="card-container">
        <Wrap spacing="40px" justify="center" marginTop="30px">
          {data.map((item) => (
            <Cards />
          ))}
        </Wrap>
      </div>
    </div>
  );
}

export default Home;
