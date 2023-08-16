import React from "react";
import styles from "../../../css/Sijang_detail.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Posts from "../../Feed/timeline/Posts";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Sijang_detail3 = ({ posts, store }) => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src="pics/marketTitle/bigTitle.jpg" className={styles.image} />
        <div className={styles.title_star}>
          <div className={styles.title}>대성정</div>
          <Rating
            className={styles.Rating}
            name="star_rating"
            precision={0.1}
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
          뚝도시장 | 한식 <br />
          서울특별시 성동구 성덕정 15길 3
        </div>
        <hr />
        <div className={styles.open_time}>
          <div className={styles.time}>영업시간</div>
          <div className={styles.field}>
            <div className={styles.days}>
              {/* <div className={styles.day}>화~목</div>
              <div className={styles.day}>금,토</div>
              <div className={styles.day}>일</div>
              <div className={`${styles.day} ${styles.rest}`}>휴무일</div> */}
            </div>
            <div className={styles.lines}>
              <div className={styles.line}>
                <img src="pics/Vector39.png" className={styles.line__} />
              </div>
              <div className={styles.line}>
                <img src="pics/Vector39.png" className={styles.line__} />
              </div>
              <div className={styles.line}>
                <img src="pics/Vector39.png" className={styles.line__} />
              </div>
              <div className={styles.line}>
                <img src="pics/Vector39.png" className={styles.line__} />
              </div>
            </div>
            <div className={styles.use_}>
              {/* <div className={styles.uses_}>오후 4시 - 자정 12시</div>
              <div className={styles.uses_}>오후 3시 - 오전 1시</div>
              <div className={styles.uses_}>오후 3시 - 오후 11시</div>
              <div className={`${styles.uses_} ${styles.rest}`}>
                매주 월요일
              </div> */}
            </div>
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
            <img src="pics/cream_gazami.png" className={styles.gazami_img} />
            <div className={styles.menu_text}>
              <span className={styles.title_menu}>크림가자미</span>
              <div className={styles.price}>20,000원</div>
              <div className={styles.explain}>
                버터에 구운 가자미에 크림소스와 감자를 곁들인 안주
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.menus_}>
          <div className={styles.menu_info}>메뉴정보</div>
          <div className={styles.menu1}>
            <div className={styles.food}>젓갈플래터</div>
            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>29,000원</div>
          </div>
          <div className={styles.menu2}>
            <div className={styles.food}>젓갈플래터</div>

            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>29,000원</div>
          </div>
          <div className={styles.menu3}>
            <div className={styles.food}>젓갈플래터</div>
            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>29,000원</div>
          </div>
        </div>
        <hr />
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
      </div>
      <div className={styles.margin_div}></div>
    </div>
  );
};

export default Sijang_detail3;
