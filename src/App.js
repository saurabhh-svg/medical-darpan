import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Header />
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
