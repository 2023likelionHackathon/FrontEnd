import React, { useState } from "react";
import styles from "../css/BottomBar.module.css";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const BottomBar = () => {
  const [activeIcon, setActiveIcon] = useState(""); // 초기 활성 null

  const handleIconClick = (iconName) => {
    setActiveIcon(() => iconName);
  };
  const [isValid, setIsValid] = useState(false);

  const toggleColor = () => {
    setIsValid(!isValid);
  };

  const HomeClassName =
    activeIcon === "홈"
      ? `${styles.icons} ${styles.selected}`
      : `${styles.lcons}`;

  const WriteClassName =
    activeIcon === "글쓰기"
      ? `${styles.icons} ${styles.selected}`
      : `${styles.lcons}`;

  const MarketClassName =
    activeIcon === "시장 검색"
      ? `${styles.icons} ${styles.selected}`
      : `${styles.lcons}`;

  const ProfileClassName =
    activeIcon === "프로필"
      ? `${styles.icons} ${styles.selected}`
      : `${styles.lcons}`;

  return (
    <div className={styles.btBar}>
      <nav className={styles.wrapper}>
        <div
          className={HomeClassName}
          onClick={toggleColor}
          style={{
            filter: isValid ? "opacity(1) drop-shadow(0 0 0 black)" : "",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="pics/NewHome.png" alt="홈" />
            </div>
            <span className={styles.sp}>홈</span>
          </Link>
        </div>
        <div
          className={WriteClassName}
          onClick={toggleColor}
          style={{
            filter: isValid ? "opacity(1) drop-shadow(0 0 0 black)" : "",
          }}
        >
          <Link to="/write" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="pics/+.png" alt="글쓰기" />
            </div>
            <span className={styles.sp}>글쓰기</span>
          </Link>
        </div>
        <div
          className={MarketClassName}
          onClick={toggleColor}
          style={{
            filter: isValid ? "opacity(1) drop-shadow(0 0 0 black)" : "",
          }}
        >
          <Link to="/search" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="pics/Market.png" alt="시장 검색" />
            </div>
            <span className={styles.sp}>시장 검색</span>
          </Link>
        </div>
        <div
          className={ProfileClassName}
          onClick={toggleColor}
          style={{
            filter: isValid ? "opacity(1) drop-shadow(0 0 0 black)" : "",
          }}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="pics/profile.png" alt="프로필" />
            </div>
            <span className={styles.sp}>프로필</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomBar;
