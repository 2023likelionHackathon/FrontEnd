import React, { useState } from "react";
import styles from "../css/BottomBar.module.css";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [activeIcon, setActiveIcon] = useState(""); // 초기 활성 null

  const handleIconClick = (iconName) => {
    setActiveIcon(() => iconName);
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
        <div className={HomeClassName} onClick={() => handleIconClick("홈")}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className={styles.pics}>
              <img src="pics/NewHome.png" alt="홈" />
            </div>
            <span className={styles.sp}>홈</span>
          </Link>
        </div>
        <div
          className={WriteClassName}
          onClick={() => handleIconClick("글쓰기")}
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
          onClick={() => handleIconClick("시장 검색")}
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
          onClick={() => handleIconClick("프로필")}
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
