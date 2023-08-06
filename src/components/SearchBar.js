import React, { useState } from "react";
import styles from "../css/SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      {" "}
      {/* 화면을 컨테이너로 설정 */}
      <div className={styles.logoBar}>
        <img src="pics/Logo2.png" alt="Logo" />
        <input
          type="search"
          value={search}
          placeholder="       시장 또는 가계명을 검색해보세요"
        />
      </div>
      <hr className={styles.hrBar} />
    </div>
  );
};

export default SearchBar;
