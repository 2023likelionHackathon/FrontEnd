import React, { useState } from "react";
import "../css/BottomBar.css";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [activeIcon, setActiveIcon] = useState(""); // 초기 활성 아이콘 설정

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName); // 클릭한 아이콘을 활성 아이콘으로 설정
  };

  return (
    <div className="btbar">
      <nav className="wrapper">
        <div
          className={`icons ${activeIcon === "홈" ? "active" : ""}`}
          onClick={() => handleIconClick("홈")}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/NewHome.png" alt="홈" />
            </div>
            <span className="sp">홈</span>
          </Link>
        </div>
        <div
          className={`icons ${activeIcon === "글쓰기" ? "active" : ""}`}
          onClick={() => handleIconClick("글쓰기")}
        >
          <Link to="/write" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/+.png" alt="글쓰기" />
            </div>
            <span className="sp">글쓰기</span>
          </Link>
        </div>
        <div
          className={`icons ${activeIcon === "시장 검색" ? "active" : ""}`}
          onClick={() => handleIconClick("시장 검색")}
        >
          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/Market.png" alt="시장 검색" />
            </div>
            <span className="sp">시장 검색</span>
          </Link>
        </div>
        <div
          className={`icons ${activeIcon === "프로필" ? "active" : ""}`}
          onClick={() => handleIconClick("프로필")}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <div className="pics">
              <img src="pics/profile.png" alt="프로필" />
            </div>
            <span className="sp">프로필</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
