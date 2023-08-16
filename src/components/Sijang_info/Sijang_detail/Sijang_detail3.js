import React from "react";
import styles from "../../../css/Sijang_detail.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Posts from "../../Feed/timeline/Posts";
const Sijang_detail3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src="pics/marketTitle/bigTitle.jpg" className={styles.image} />
        <div className={styles.title}>대성정</div>
        <div className={styles.loc}>
          뚝도시장 | 한식 <br />
          서울특별시 성동구 성덕정 15길 3
        </div>
        <hr />
        <div className={styles.open_time}>
          <div className={styles.time}>영업시간</div>
          <div className={styles.field}>
            <div className={styles.days}>
              <div className={styles.day}>정보없음</div>
              {/* <div className={styles.day}>화~목</div>
              <div className={styles.day}>금,토</div>
              <div className={styles.day}>일</div>
              <div className={`${styles.day} ${styles.rest}`}>휴무일</div> */}
            </div>
            <div className={styles.lines}></div>
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
            <img
              src="/pics/marketMenu/bigSeungmenu.jpg"
              className={styles.gazami_img}
            />
            <div className={styles.menu_text}>
              <span className={styles.title_menu}>닭볶음탕</span>
              <div className={styles.price}>55,000원</div>
              <div className={styles.explain}>사장님의 특제소스 닭볶음탕</div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.menus_}>
          <div className={styles.menu_info}>메뉴정보</div>
          <div className={styles.menu1}>
            <div className={styles.food}>닭백숙</div>
            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>55,000원</div>
          </div>
          <div className={styles.menu2}>
            <div className={styles.food}>과매기(대)</div>

            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>35,000원</div>
          </div>
          <div className={styles.menu3}>
            <div className={styles.food}>청국장</div>
            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>7,000원</div>
          </div>
        </div>
        <hr />
        {/* <Posts/>  포스트 백으로부터 받아와서 매핑*/}
      </div>
      <div className={styles.margin_div}></div>
    </div>
  );
};

export default Sijang_detail3;
