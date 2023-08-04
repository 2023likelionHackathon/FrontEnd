import React, { useState } from 'react';
import styles from "../../../css/Timeline.module.css";
import Posts from './Posts';
import BottomBar from '../../BottomBar';
const Timeline = () => {
    const [posts,setPost] = useState([
        {
            user: "KimBeomSu",
            postImage: "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/32cba5e4-4d70-488c-a246-1ff2bdff8094.jpg",
            likes: 42312,
            timeStamp: "3일전"
        },
        {
            user: "KangChangJin",
            postImage: "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/45637da7-6253-4ea5-ae1c-4754c8f3345c.jpg",
            likes:112345,
            timeStamp: "30분전"
        },
        {
            user: "KimChaeWon",
            postImage: "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/32cba5e4-4d70-488c-a246-1ff2bdff8094.jpg",
            likes: 451234,
            timeStamp: "1일전"
        },
        {
            user: "LeeChangGyu",
            postImage: "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/45637da7-6253-4ea5-ae1c-4754c8f3345c.jpg",
            likes: 82839,
            timeStamp: "10일전"
        },
        {
            user: "KimSuMin",
            postImage: "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/32cba5e4-4d70-488c-a246-1ff2bdff8094.jpg",
            likes: 12345,
            timeStamp: "3일전"
        },
        {
            user: "KimMinGi",
            postImage: "https://s3.ap-northeast-2.amazonaws.com/markeybucket/post/image/45637da7-6253-4ea5-ae1c-4754c8f3345c.jpg",
            likes: 42124,
            timeStamp: "1분전"
        }
    ]);
    return (
        <div className={styles.timeline}>
           <div className={styles.timeline_posts}>
                {posts.map(post => (
                    <Posts 
                    user={post.user} 
                    postImage={post.postImage} 
                    likes={post.likes} timeStamp={post.timeStamp}/>          
                ))}
           </div>
           <BottomBar />
        </div>
    );
};

export default Timeline;