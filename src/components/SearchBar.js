import React, { useState } from "react";
import styles from "../css/SearchBar.module.css";
import { Link } from "react-router-dom";
const SearchBar = ({ isSearch = false, search, setSearch }) => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.logoBar}>
          <Link to="/">
            <img src="/pics/LOGO_FINAL.png" alt="Logo" />
          </Link>
          {isSearch && (
            <input
              type="search"
              value={search}
              onFocus={() => {
                setIsInputClicked(true);
              }}
              // 클릭되어 있지 않을 때 작동input 이외의 영역이 클릭되었을 때)
              onBlur={() => {
                setIsInputClicked(false);
              }}
              placeholder={
                isInputClicked === true ? "" : "        가게를 검색해보세요"
              }
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        </div>
        <hr className={styles.hrBar} />
      </div>
    </div>
  );
};

export default SearchBar;
