import React from "react";
import logo from "../images/logo.svg";
import { navIcons } from "./data";
import PageLinks from "./PageLinks";
import SocialIcons from "./SocialIcons";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <SocialIcons parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
