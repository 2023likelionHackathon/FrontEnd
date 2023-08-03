import React from "react";
import "./BottomBar.css";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <nav className="wrapper">
      <div>
        <Link to="/">
          <img src="pics/Home.png"></img>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src="pics/+.png"></img>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src="pics/Market.png"></img>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src="pics/profile.png"></img>
        </Link>
      </div>
    </nav>
  );
};

export default BottomBar;
