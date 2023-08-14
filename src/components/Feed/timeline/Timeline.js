import React, { useEffect, useState } from "react";
import styles from "../../../css/Timeline.module.css";
import Posts from "./Posts";
import BottomBar from "../../BottomBar";
import SearchBar from "../../SearchBar";
import axios from "axios";
const Timeline = () => {
  const [posts, setPosts] = useState([]);

  const getPostList = async () => {
    const resp = await (
      await axios.get("http://54.180.53.205/board/viewAll")
    ).data; // 2) feed data 할당
    setPosts(resp); // posts에 data 할당
    console.log("resp", resp);
  };

  useEffect(() => {
    getPostList(); // 1) feed 조회 함수 호출
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <div className={styles.timeline_posts}>
          {posts.map((post) => (
            <Posts
              boardId={post.boardId}
              userId={post.userId}
              writer={post.writer}
              storeId={post.storeId}
              storeName={post.storeName}
              content={post.content}
              score={post.score}
              likes={post.likes}
              imgUrlList={post.imgUrlList}
              size_reply={post.size_reply}
              createdDate={post.createdDate}
            />
          ))}
        </div>
        <div className={styles.margin_div}></div>
      </div>
    </div>
  );
};

export default Timeline;
