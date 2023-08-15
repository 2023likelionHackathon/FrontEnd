import React, { useEffect, useState } from "react";
import styles from "../../../css/Timeline.module.css";
import Posts from "./Posts";
import BottomBar from "../../BottomBar";
import SearchBar from "../../SearchBar";
import axios from "axios";
const Timeline = ({posts}) => {
  if(!posts){
    return <div>
      로딩중
    </div>
  }

  if(posts.length === 0 ){
    return <div>
      여기 게시글이 없어
    </div>
  }

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
