import React from "react";
import styles from "../css/Profile_info.module.css";
import Posts from "./Feed/timeline/Posts";
import axios from "axios";
const Profile_info = ({ user, posts }) => {
  if (!posts) {
    return (
      <div className={styles.loadingScreen}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  console.log("?");
  const cookies = document.cookie.split(";");
  console.log(cookies);
  for (let cookie of cookies) {
    let trimmedCookie = cookie.trim();
    if (trimmedCookie.startsWith("access_token=")) {
      let accessToken = trimmedCookie.substring("access_token=".length);

      console.log("accessToken: " + accessToken);
    }
  }
  const viewPostDetail = async (boardId) => {
    console.log(boardId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.emptySpace} />
      <div className={styles.my_profile}>내 프로필</div>
      <div className={styles.profile_line_face}>
        <img src="pics/profile_line.png" className={styles.lines} />
        <img src="pics/profile_mug.png" className={styles.face} />
      </div>
      <div className={styles.nickname}>{user.nickname}</div>
      <div className={styles.follows}>
        <div className={styles.follow}>적립금 {user.reward}</div>
        <div className={styles.sep}>|</div>
      </div>
      <div className={styles.timeline_posts}>
        {posts.map((post) => (
          //   <img src={post.imgUrlList[0]} className={styles.images__} />
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
  );
};

export default Profile_info;
