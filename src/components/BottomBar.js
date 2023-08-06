import React from "react";
import "../css/BottomBar.css";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <div className="btbar">
      <nav className="wrapper">
        <div className="icons">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/Home.png"></img>
            </div>
            <span className="sp">홈</span>
          </Link>
        </div>
        <div className="icons">
          <Link to="/write" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/+.png"></img>
            </div>
            <span className="sp">글쓰기</span>
          </Link>
        </div>
        <div className="icons">
          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/Market.png"></img>
            </div>
            <span className="sp">시장 검색</span>
          </Link>
        </div>
        <div className="icons">
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/profile.png"></img>
            </div>
            <span className="sp">프로필</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
