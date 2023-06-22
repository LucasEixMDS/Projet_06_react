import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoB.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} className="logo_header" alt="logo" />
      </Link>
      <Link to="/Error">
        <h2>© 2020 Kasa. All rights reserved</h2>
      </Link>
    </div>
  );
};

export default Footer;
