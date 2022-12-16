import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Distributors from "./pages/Distributors";
import Manufacturers from "./pages/Manufacturers";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
import { Wrap } from "@chakra-ui/react";

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/distributors" element={<Distributors />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Header />
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
    </div>
  );
}

export default App;
