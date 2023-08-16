import React from "react";
import styles from "../../../css/Sijang_detail.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Posts from "../../Feed/timeline/Posts";
const Sijang_detail4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src="pics/marketTitle/ddeokTitle.jpg" className={styles.image} />
        <div className={styles.title}>떡마을</div>
        <div className={styles.loc}>
          뚝도시장 | 떡집 <br />
          서울특별시 성동구 성덕정길 91
        </div>
        <hr />
        <div className={styles.open_time}>
          <div className={styles.time}>영업시간</div>
          <div className={styles.field}>
            <div className={styles.days}>
              <div className={styles.day}>매일</div>
            </div>
            <div className={styles.lines}>
              <div className={styles.line}>
                <img src="pics/Vector39.png" className={styles.line__} />
              </div>
            </div>
            <div className={styles.use_}>
              <div className={styles.uses_}>오전 8시 - 오후 10시</div>
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
              src="pics/marketMenu/riceCountryMenu.jpg"
              className={styles.gazami_img}
            />
            <div className={styles.menu_text}>
              <span className={styles.title_menu}>국말이떡</span>
              <div className={styles.price}>2,000원</div>
              <div className={styles.explain}>
                사장님이 손수 만드신 뚝도시장만의 국말이떡
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.menus_}>
          <div className={styles.menu_info}>메뉴정보</div>
          <div className={styles.menu1}>
            <div className={styles.food}>떡케잌</div>
            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>변동</div>
          </div>
          <div className={styles.menu2}>
            <div className={styles.food}>백일떡</div>

            <div className={styles.line}>
              <img src="pics/Vector39.png" className={styles.line__} />
            </div>
            <div className={styles.price}>변동</div>
          </div>
          <div className={styles.menu3}></div>
        </div>
        <hr />
        {/* <Posts/>  포스트 백으로부터 받아와서 매핑*/}
      </div>
      <div className={styles.margin_div}></div>
    </div>
  );
};

export default Sijang_detail4;
