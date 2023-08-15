import React, { useState } from "react";
import styles from "../css/SearchBar.module.css";

const SearchBar = ({isSearch = false, search, setSearch}) => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        {" "}
        {/* 화면을 컨테이너로 설정 */}
        <div className={styles.logoBar}>
          <img src="/pics/NewLogo.png" alt="Logo" />
          {isSearch && <input
            type="search"
            value={search}
            placeholder="       시장 또는 가계명을 검색해보세요"
            onChange={(e) => setSearch(e.target.value)}
          /> }
        </div>
        <hr className={styles.hrBar} />
      </div>
    </div>
  );
};

export default SearchBar;
