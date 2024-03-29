import React, { useState } from "react";
import styles from "../../../css/Post.module.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import HeartOutLineIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import moment from "moment/moment";
import axios from "axios";
import { Link } from "react-router-dom";

const CustomRating = (props) => {
  // console.log("score", props.score);
  return (
    <Rating
      name="custom-rating"
      value={props.score}
      precision={0.5}
      readOnly
      emptyIcon={<StarIcon style={{ opacity: 0.5 }} />}
      icon={<StarIcon style={{ color: "rgba(255, 0, 0, 0.6)" }} />}
      halfIcon={<StarHalfIcon style={{ color: "rgba(255, 0, 0, 0.6)" }} />}
    />
  );
};
const getDayMinuteCounter = (props) => {
  if (!props.date) {
    return "";
  }
  const today = moment();

  const postingDate = moment(props.date).add(9, "h");

  const dayDiff = postingDate.diff(today, "days");
  const hourDiff = postingDate.diff(today, "hours");
  const minutesDiff = postingDate.diff(today, "minutes");
  console.log("dayDiff", dayDiff);
  console.log("hourDiff", hourDiff);
  if (dayDiff === 0 && hourDiff === 0) {
    // 작성한지 1시간도 안지났을때
    const minutes = Math.ceil(-minutesDiff);
    return minutes + "분 전"; // '분' 로 표시
  } else if (dayDiff === 0 && hourDiff <= 24) {
    // 작성한지 1시간은 넘었지만 하루는 안지났을때,
    const hour = Math.ceil(-hourDiff);

    return hour + "시간 전"; // '시간'으로 표시
  }

  return -dayDiff + "일 전";
};

const Posts = ({
  boardId,
  userId,
  writer,
  storeId,
  storeName,
  content,
  score,
  likes,
  imgUrlList,
  size_reply,
  createdDate,
}) => {
  console.log("createdDate", createdDate);
  const [isLiked, setIsLiked] = useState(likes.isLiked);
  const [likeCount, setLikeCount] = useState(likes.likes_cnt);

  axios.defaults.withCredentials = true;
  const handleLikeClick = async () => {
    console.log("boardId", boardId);

    try {
      const resp = await axios.post(
        `http://api.domarketdodo.shop/board/like/${boardId}`,
        {
          withCredentials: true,
        }
      );
      const { isLiked: updatedIsLiked, likes_cnt: updatedLikeCount } =
        resp.data;

      setIsLiked(updatedIsLiked);
      setLikeCount(updatedLikeCount);
    } catch (error) {
      console.error("Error handling like:", error);
      alert(error.response.data.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.post_header}>
          <div className={styles.postheader_user}>
            <Avatar className={styles.avatar}>
              {writer ? writer.charAt(0).toUpperCase() : ""}
            </Avatar>
            <div className={styles.post_writer}>{writer}</div>
            {writer && (
              <span className={styles.post_date}>
                {getDayMinuteCounter({ date: createdDate })}
              </span>
            )}
          </div>
          <CustomRating score={score} />
        </div>
        <div className={styles.loc_div}>
          <div className={styles.empty_div}></div>
          <Link to={`/market/0/store/${storeId}`} className={styles.jumpoLink}>
            <img src="pics/location_store.png" />
            <div className={styles.users_jumpo} >{storeName}</div>
          </Link>
        </div>

        <div className={styles.post_image}>
          <img src={imgUrlList[0]} alt="image" />
        </div>
        <div className={styles.footer}>
          <div className={styles.post_content}>{content}</div>
          <div className={styles.post_footerIcons}>
            <div className={styles.Icons_union}>
              <HeartOutLineIcon
                className={styles.postIcon1}
                style={{ color: isLiked ? "red" : "inherit" }}
                onClick={handleLikeClick}
              />
              <span className={styles.like}>{likeCount}</span>
              <Link to={`/comment/${boardId}`}>
                <ChatBubbleOutlineIcon className={styles.postIcon2} />
              </Link>
              <span className={styles.chat}>{size_reply}</span>
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
