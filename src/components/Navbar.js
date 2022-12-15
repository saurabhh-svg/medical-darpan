import React from "react";
import "./Navbar.css";
import logo from "../images/logoo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Logo" className="site-logo" />

      <a href="/" className="site-title">
        Medical Darpan
      </a>

      <ul>
        <li>
          <a href="/home" className="site-routes">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="site-routes">
            Products
          </a>
        </li>
        <li>
          <a href="/distributors" className="site-routes">
            Distributors
          </a>
        </li>
        <li>
          <a href="/manufacturers" className="site-routes">
            Manufacturers
          </a>
        </li>
        <li>
          <a href="/aboutus" className="site-routes">
            About us
          </a>
        </li>
        <li>
          <a href="/blog" className="site-routes">
            Blog
          </a>
        </li>
        <li>
          <a href="/login" className="site-login">
            Login
          </a>
        </li>
        <li>
          <AccountCircleOutlinedIcon />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
