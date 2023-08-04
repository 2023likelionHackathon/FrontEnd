import React from 'react';
import styles from "../../css/Feed_main.module.css";
import Timeline from "./timeline/Timeline";

const Feed_main = () => {
    return (
        <div className={styles.feed}>
            <div className={styles.feed_timeline}>
                <Timeline/>
            </div>
        </div>
    );
};

export default Feed_main;
