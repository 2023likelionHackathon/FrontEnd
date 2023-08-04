import React from 'react';
import styles from "../../../css/Post.module.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
            icon={<StarIcon style={{ color: 'rgba(255, 0, 0, 0.6)'}} />}
        />
    );
};
const Posts = ({user,postImage,likes,timeStamp}) => {
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <div className={styles.post_header}>
                    <div className={styles.postheader_user}>
                        <Avatar className={styles.avatar}>{user.charAt(0).toUpperCase()}</Avatar>
                        {user} <span>{timeStamp}</span>
                    </div>
                    <StarRaiting />
                </div>
                <div className={styles.post_image}>
                    <img src={postImage} alt='image' />
                </div>
                <div className={styles.footer}>
                    <div className={styles.post_footerIcons}>
                        <div className={styles.Icons_union}>
                            <FavoriteBorderIcon className={styles.postIcon} />
                            <ChatBubbleOutlineIcon className={styles.postIcon} />
                        </div>
                        <div className={styles.Icons_save}>
                            <BookmarkBorderIcon className={styles.postIcon}/>
                        </div>
                    </div>
                    Liked by {likes} people.
                </div>
            </div>
        </div>

    );
};

export default Posts;