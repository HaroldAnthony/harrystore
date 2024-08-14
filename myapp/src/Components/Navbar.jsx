import React from "react";
import { Link } from "react-router-dom";
import HSLogo from "./images/hs-logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_div">
        <div>
          <input type="text" placeholder="Search here" />
          {/* SearchIcon */}
          {/* CloseIcon */}
        </div>
        <div>
          <div className="navbar_main">
            <div>
              <div>{/* SearchIcon */}</div>
              {/* MenuIcon */}
            </div>
            <div>
              <img src={HSLogo} className="heading_logo" alt="" />
            </div>
            <div className="bad_search">
              {/* SearchIcon */}
              {/* LocalIcon */}
            </div>
          </div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/loginform">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
