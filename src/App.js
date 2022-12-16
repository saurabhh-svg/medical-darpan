import React from "react";
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

function App() {
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
    </div>
  );
}

export default App;
