import React from 'react';
import styles from "../css/Profile_info.module.css";
const Profile_info = () => {
    return (
        <div className={styles.container}>
            <div className={styles.my_profile}>
                내 프로필
            </div>
            <div className={styles.profile_line_face}>
                <img src="pics/profile_line.png" className={styles.lines} />
                <img src="pics/profile_mug.png" className={styles.face} />
            </div>
            <div className={styles.nickname}>
                아기사자
            </div>
            <div className={styles.follows}>
                <div className={styles.follow}>
                    팔로잉 100
                </div>
                <div className={styles.sep}>|</div>
                <div className={styles.following}>
                    팔로워 91
                </div>
            </div>
            <div className={styles.Grid}>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
               <img src="pics/s_fish2.png" className={styles.images}/>
            </div>
            <div className={styles.margin_div}>

            </div>
        </div>
    );
};

export default Profile_info;