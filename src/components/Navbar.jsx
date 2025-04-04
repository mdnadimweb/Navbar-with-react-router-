import { NavLink } from "react-router";
import React from "react";
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
            <img src= {logo} alt="logo for nav" />
        </div>
        <div className="links">
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
