import React from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navLeft">
        <Link className="linkClass" to="/">
          <img src="./Logo.png" className="devrosLogo" alt="logo" />
        </Link>
        <Link className="linkClass" to="/">
          <p className="pages">Home</p>
        </Link>
        <Link className="linkClass" to="/service">
          <p className="pages">Service</p>
        </Link>
        <Link className="linkClass" to="/about">
          <p className="pages">About</p>
        </Link>
        <Link className="linkClass" to="/contact">
          <p className="pages">Contact</p>
        </Link>
      </div>
      <div className="navRight">
        <img src="./Vector.png" className="vectorPng" alt="vectorPng" />
        <div className="navInputWrapper">
          <input className="navInputBox" placeholder="Search" type="text" />
          <IoMdSearch className="searchBtn" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
