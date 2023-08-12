import React from 'react';
import BottomBar from '../components/BottomBar';
import SearchBar from '../components/SearchBar';
import styles from "../css/Gn.module.css";
const Gn = () => {
    return (
        <div>
            <SearchBar/>
            <div className={styles.container}>
                <span className={styles.p}>등록된 정보가 없습니다.</span>
            </div>
            <BottomBar/>
        </div>
    );
};

export default Gn;