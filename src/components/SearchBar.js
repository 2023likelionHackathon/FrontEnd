import React, { useState } from "react";
import styles from "../css/SearchBar.module.css";
import { Link } from "react-router-dom";
const SearchBar = ({ isSearch = false, search, setSearch }) => {
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
              placeholder="       가게명을 검색해보세요"
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
