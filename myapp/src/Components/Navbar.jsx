import React from "react";
import { Link } from "react-router-dom";
import HSLogo from "./images/hs-logo.png";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_div">
        <div>
          <input type="text" placeholder="Search here" />
          <SearchIcon className="Search_icon_input" />
          {/* CloseIcon */}
        </div>
        <div>
          <div className="navbar_main">
            <div>
              <div>
                {" "}
                <SearchIcon className="Search_icon" />
              </div>
              <MenuIcon className="menu_icon" />
            </div>
            <div>
              <img src={HSLogo}
              className="heading_logo" alt="" />
            </div>
            <div className="bad_search">
              <SearchIcon className="Search_icon2" />
              {/* LocalIcon */}
            </div>
          </div>
          <div className="Nav_links">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/contact" className="link">
              Contact
            </Link>
            <Link to="/privacy" className="link">
              Privacy
            </Link>
            <Link to="/loginform" className="link">
              Login
            </Link>
            <Link to="/signup" className="link">
              Signup
            </Link>
          </div>
        </div>
        <Link to="/" className="sidebar_link">
          Home
        </Link>
        <Link to="/contact" className="sidebar_link">
          Contact
        </Link>
        <Link to="/privacy" className="sidebar_link">
          Privacy
        </Link>
        <Link to="/loginform" className="sidebar_link">
          Login
        </Link>
        <Link to="/signup" className="sidebar_link">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
