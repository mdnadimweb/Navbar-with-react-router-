import { NavLink } from "react-router";
import React from "react";
import logo from "../assets/logo.png";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo for nav" />
        </div>

        <div className="icons">
          <a href="https://www.facebook.com/" target="_blank">
            <BiLogoFacebook />{" "}
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <BiLogoInstagram />{" "}
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <BiLogoLinkedin />{" "}
          </a>
        </div>

        <div className="links">
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/ContactForm">form</NavLink>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
