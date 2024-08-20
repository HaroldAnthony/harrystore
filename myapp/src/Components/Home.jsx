import React from "react";
import "./Home.css";
import Cartform from "./Cartform";

const Home = () => {
  return (
    <div>
      <div className="home_header">
        <div className="data">
          <div className="header_container">
            <h1>Hacker-for-hire</h1>
            <p>
              With ample skills and experience, non-deepweb hackers are ready to
              perform all kinds of hacking services, and efficiently deliver
              results to serious customers, who co-operate with our modus
              operandi.
            </p>
            <button className="Shampoobtn">Contact us</button>
          </div>
        </div>
      </div>
      <Cartform />
    </div>
  );
};

export default Home;
