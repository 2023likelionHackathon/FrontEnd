import React from "react";
import styles from "../../css/Ddukdo_info.module.css";
import { Link, useParams } from "react-router-dom";
import { markets } from "../../lib/market";
const DivGrid = ({ stores, marketId }) => {
  return (
    <div className={styles.grid}>
      {stores.map((store, i) => {
        const { image, address, name } = store;
        return (
          <div>
            <Link
              to={`/market/${marketId}/store/${i}`}
              className={styles.Link_}
            >
              <div className={styles.box_}>
                <img src={image} className={styles.images__} />
                <div className={styles.text_box}>
                  <h3 className={styles.jumpo_name}>
                    {name}
                  </h3>
                  <span className={styles.detail_address}>{address}</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const MarketDetail = () => {
  const { marketId } = useParams();
  const market = markets[marketId];

  return (
    <div className={styles.container}>
      <div className={styles.dduk_pic}></div>
      <span className={styles.title}>{market.name}</span>
      <div className={styles.sijang_about}>
        <div className={styles.icon_text}>
          <div className={styles.liner}>
            <img src="/pics/location.png" className={styles.images}></img>
            <p className={styles.infos}>{market.address}</p>
          </div>
          <div className={styles.liner}>
            <img src="/pics/call.png" className={styles.images}></img>
            <a href="tel" className={`${styles.infos} ${styles.phone_call}`}>
              02-464-4426
            </a>
          </div>
          <div className={styles.liner}>
            <img src="/pics/calender.png" className={styles.images}></img>
            <p className={styles.infos}>{market.timeline}</p>
          </div>
          <div className={styles.liner}>
            <img src="/pics/parking.png" className={styles.images}></img>
            <p className={styles.infos}>
              {market.isParking ? "주차 가능" : "주차 불가능"}
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.hr_bar} />
      <div className={styles.jumpo}>시장 내 점포</div>
      <div className={styles.gridContainer}>
        <DivGrid stores={market.stores} marketId={marketId} />
      </div>
      <div className={styles.margin_div}></div>
    </div>
  );
};

export default MarketDetail;
