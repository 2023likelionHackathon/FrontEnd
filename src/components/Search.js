import React, { useState } from 'react';
import styles from "../css/Search.module.css";

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="container"> {/* 화면을 컨테이너로 설정 */}
            <div className={styles.logoBar}>
                <img src="pics/Logo.png" alt="Logo" />
                <input
                    type="search"
                    value={search}
                    placeholder="      시장 또는 가계명을 검색해보세요"
                />
            </div>
        </div>
    );
};

export default Search;
