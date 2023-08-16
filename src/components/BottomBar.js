import React, { useState } from "react";
import styles from "../css/BottomBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const BottomBar = () => {
  const [activeIcon, setActiveIcon] = useState(""); // 초기 활성 null
  const [isValid, setIsValid] = useState(false);
  const { isLoggedIn } = useSelector((store) => store);
  const navigate = useNavigate();
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  const toggleColor = () => {
    setIsValid(!isValid);
  };

  const handleProfileClick = () => {
    console.log("isLoggedIn : ", isLoggedIn);
    if (isLoggedIn) {
      // 로그인 상태일 때는 프로필 페이지로 이동
      navigate("/profile");
    } else {
      // 미 로그인 상태일 때는 로그인 페이지로 이동
      navigate("/login");
    }
  };

  return (
    <div className={styles.btBar}>
      <nav className={styles.wrapper}>
        <div
          className={`${styles.icons} ${
            activeIcon === "홈" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("홈")}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="/pics/NewHome.png" alt="홈" />
            </div>
            <span className={styles.sp}>홈</span>
          </Link>
        </div>
        <div
          className={`${styles.icons} ${
            activeIcon === "글쓰기" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("글쓰기")}
        >
          <Link to="/write" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="/pics/+.png" alt="글쓰기" />
            </div>
            <span className={styles.sp}>글쓰기</span>
          </Link>
        </div>
        <div
          className={`${styles.icons} ${
            activeIcon === "시장 검색" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("시장 검색")}
        >
          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="/pics/Market.png" alt="시장 검색" />
            </div>
            <span className={styles.sp}>시장 검색</span>
          </Link>
        </div>
        <div
          className={`${styles.icons} ${
            activeIcon === "프로필" ? styles.selected : ""
          }`}
          onClick={() => handleIconClick("프로필")}
        >
          <Link
            to="#"
            onClick={handleProfileClick}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className={styles.pics}>
              <img src="/pics/profile.png" alt="프로필" />
            </div>
            <span className={styles.sp}>프로필</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
