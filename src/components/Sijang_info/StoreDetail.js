import React from "react";
import styles from "../../css/Sijang_detail.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useParams } from "react-router-dom";
import { markets } from "../../lib/market";

const StoreDetail = () => {
  const {marketId, storeId} = useParams();

  const market = markets[marketId];
  const store = markets[marketId].stores[storeId];

  
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <img src="/pics/marketTitle/seongSuTitle.png" className={styles.image} />
        <div className={styles.title_star}>
          <div className={styles.title}>성수물고기</div>
          <Rating
            className={styles.Rating}
            name="star_rating"
            precision={0.2}
            value={store != null ? store.score : 3} //임시값임 서버에서  받아와서 들어갈값
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
          {market.name} | 와인,파스타 <br />
          {store.address}
        </div>
        <hr />
        <div className={styles.open_time}>
          <div className={styles.time}>영업시간</div>
          <div className={styles.field}>
            <div className={styles.days}>
              {
                store.times.map(time => {
                  return (
                    <div className={styles.day}>{time.day}</div>
                  )
                })
              }
            </div>
            <div className={styles.lines}>
              {store.times.map(t => {
                return (
                  <div className={styles.line}>
                    <img src="/pics/Vector39.png" className={styles.line__} />
                  </div>
                )
              })}
            </div>
            <div className={styles.use_}>
              {store.times.map(t => {
                return (
                  <div className={styles.uses_}>{t.time}</div>
                )
              })}
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
          {
            store.menu.map(m => {
              return (
                <div className={styles.menu_img_text}>
                  <img src={m.img} className={styles.gazami_img} />
                  <div className={styles.menu_text}>
                    <span className={styles.title_menu}>{m.name}</span>
                    <div className={styles.price}>{m.price}</div>
                    <div className={styles.explain}>
                      {m.description}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <hr />
        <div className={styles.menus_}>
          <div className={styles.menu_info}>메뉴정보</div>
          {
            store.submenu?.map(m => {
              return (
                <div className={styles.menu3}>
                  <div className={styles.food}>{m.name}</div>
                  <div className={styles.line}>
                    <img src="/pics/Vector39.png" className={styles.line__} />
                  </div>
                  <div className={styles.price}>{m.price}</div>
                </div>
              )
            })
          }
          
        </div>
        <hr />
        {/* <Posts/>  포스트 백으로부터 받아와서 매핑*/}
      </div>
      <div className={styles.margin_div}></div>
    </div>
  );
};

export default StoreDetail;
