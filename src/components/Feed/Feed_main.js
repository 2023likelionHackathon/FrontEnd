import React from "react";
import styles from "../../css/Feed_main.module.css";
import Timeline from "./timeline/Timeline";
import SearchBar from "../SearchBar";

const Feed_main = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feed_timeline}>
        <div className={styles.center}>
          <SearchBar />
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Feed_main;
