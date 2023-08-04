import React, { useState } from 'react';
import styles from "../../../css/Post.module.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import HeartOutLineIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';

const StarRaiting = () => {
  return (
    <Rating
      name="star rating"
      value={4.5}
      precision={0.5}
      readOnly
      icon={<StarIcon style={{ color: 'rgba(255, 0, 0, 0.6)' }} />}
    />
  );
};

const Posts = ({ user, postImage, likes, timeStamp, chats }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.post_header}>
          <div className={styles.postheader_user}>
            <Avatar className={styles.avatar}>{user.charAt(0).toUpperCase()}</Avatar>
            {user} <span>_{timeStamp}</span>
          </div>
          <StarRaiting />
        </div>
        <div className={styles.post_image}>
          <img src={postImage} alt='image' />
        </div>
        <div className={styles.footer}>
          <div className={styles.post_footerIcons}>
            <div className={styles.Icons_union}>
              <HeartOutLineIcon
                className={styles.postIcon1}
                style={{ color: isLiked ? 'red' : 'inherit' }}
                onClick={handleLikeClick}
              />
              <span className={styles.like}>{likeCount}</span> 
              <ChatBubbleOutlineIcon className={styles.postIcon2} />
              <span className={styles.chat}>{chats}</span>
            </div>
            <div className={styles.Icons_save}>
              <BookmarkBorderIcon className={styles.postIcon3} />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Posts;
