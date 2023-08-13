import React, { useState } from "react";
import styles from "../../css/Loc_with_sijang.module.css";
import { Link } from "react-router-dom";

const Loc_with_sijang = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  let sijangContent = null;
  let GwaingJin = (
    <div className={styles.GwaingJin}>아직 등록된 시장이 없습니다.</div>
  );
  let GangBuk = (
    <div className={styles.GangBuk}>아직 등록된 시장이 없습니다.</div>
  );
  let SeongDong = (
    <div className={styles.SeongDong}>
      <div className={styles.box}>
        <div className={styles.intro}>성동구의 시장</div>
        <div className={`${styles.geumnam} ${styles.sijangs}`}>
          <Link to="/gn" className={styles.link_}>
            <div className={styles.sijang_info}>
              <div className={styles.GN_pic}></div>
              <div className={styles.about}>
                <p>1.금남시장</p>
                <br />
                <span>서울특별시 성동구 금호동3가 326</span>
              </div>
            </div>
          </Link>
        </div>
        <div className={`${styles.ddukdo} ${styles.sijangs}`}>
          <Link to="/ddukdo" className={styles.link_}>
            <div className={styles.sijang_info}>
              <div className={styles.dd_pic}></div>
              <div className={styles.about}>
                <p>2.뚝도청춘시장</p>
                <br />
                <span>서울 성동구 성수이로 32-15 2층</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
  if (selectedLocation === "광진구") {
    sijangContent = <div className={styles.sijang_content}>{GwaingJin}</div>;
  } else if (selectedLocation === "강북구") {
    sijangContent = <div className={styles.sijang_content}>{GangBuk}</div>;
  } else if (selectedLocation === "성동구") {
    sijangContent = <div className={styles.sijang_content}>{SeongDong}</div>;
  }

  const loc1ClassName =
    selectedLocation === "광진구"
      ? `${styles.loc} ${styles.loc1} ${styles.selected}`
      : `${styles.loc} ${styles.loc1}`;
  const loc2ClassName =
    selectedLocation === "강북구"
      ? `${styles.loc} ${styles.loc2} ${styles.selected}`
      : `${styles.loc} ${styles.loc2}`;
  const loc3ClassName =
    selectedLocation === "성동구"
      ? `${styles.loc} ${styles.loc3} ${styles.selected}`
      : `${styles.loc} ${styles.loc3}`;

  return (
    <div className={styles.container}>
      <div className={styles.nav_bar}>
        <div
          className={loc3ClassName}
          onClick={() => handleLocationClick("성동구")}
        >
          성동구
        </div>
        <div
          className={loc1ClassName}
          onClick={() => handleLocationClick("광진구")}
        >
          광진구
        </div>
        <div
          className={loc2ClassName}
          onClick={() => handleLocationClick("강북구")}
        >
          강북구
        </div>
      </div>
      <div className={`${styles.sijang_name}`}>{sijangContent}</div>
    </div>
  );
};

export default Loc_with_sijang;
