import React from "react";
import styles from "../../../css/Sijang_detail.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Posts from "../../Feed/timeline/Posts";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Sijang_detail6 = ({ posts, store }) => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src="pics/marketTitle/ddungTitle.jpg" className={styles.image} />
        <div className={styles.title_star}>
          <div className={styles.title}>뚱이네포차</div>
          <Rating
            className={styles.Rating}
            name="star_rating"
            precision={0.2}
            value={store.score} //임시값임 서버에서  받아와서 들어갈값
            readOnly
            emptyIcon={<StarIcon style={{ opacity: 0.6, fontSize: "30px" }} />}
            icon={
              <StarIcon
                style={{ color: " rgba(247, 128, 128)", fontSize: "30px" }}
              />
            }
            halfIcon={
              <StarHalfIcon
                style={{ color: " rgba(247, 128, 128)", fontSize: "30px" }}
              />
            }
          ></Rating>
        </div>
        <div className={styles.loc}>
          뚝도시장 | 포장마차 <br />
          정보없음
        </div>
        <hr />
        <div className={styles.open_time}>
          <div className={styles.time}>영업시간</div>
          <div className={styles.field}>
            <div className={styles.days}>
              <div className={styles.day}>정보없음</div>
            </div>
            <div className={styles.lines}></div>
            <div className={styles.use_}></div>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <div className={styles.samechu}>
            <div className={styles.samechu_}>사메추</div>
            <FavoriteIcon color="error" style={{ fontSize: 32 }} />
            <div className={styles.samechu_text}>
              사장님이 직접 추천하는 메뉴
            </div>
          </div>
          <div className={styles.menu_img_text}>
            <img
              src="pics/marketMenu/ddungMenu.jpg"
              className={styles.gazami_img}
            />
            <div className={styles.menu_text}>
              <span className={styles.title_menu}>돼지고기두루치기</span>
              <div className={styles.price}>정보없음</div>
              <div className={styles.explain}></div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.menus_}>
          <div className={styles.menu_info}>메뉴정보</div>
          <div className={styles.menu1}>
            <div className={styles.food}>정보없음</div>
          </div>
        </div>
        <hr />
        {/* <Posts/>  포스트 백으로부터 받아와서 매핑*/}
      </div>
      <div className={styles.margin_div}></div>
    </div>
  );
};

export default Sijang_detail6;
