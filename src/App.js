import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Distributors from "./pages/distributors";
import Manufacturers from "./pages/manufacturers";
import Aboutus from "./pages/aboutus";
import Blog from "./pages/blog";

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
      <Sidebar />
    </div>
  );
}

export default App;
