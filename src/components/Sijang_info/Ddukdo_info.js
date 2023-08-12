import React from 'react';
import styles from "../../css/Ddukdo_info.module.css";
import { Link } from 'react-router-dom';

const DivGrid = () => {
    return (
        <div className={styles.grid}>
            <Link to="/sijang_detail" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/s_fish2.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.성수물고기</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성수동 2가 339-122</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>
            <Link to="/" className={styles.Link_}> 
                <div className={styles.box_}>
                    <img src="pics/ddukdo.png" />
                    <div className={styles.text_box}>
                        <h3 className={styles.jumpo_name}>1.점포이름</h3>
                        <span className={styles.detail_address}>서울특별시 성동구 성덕정길 91</span>
                    </div>
                </div>
            </Link>


        </div>
    );
};

const Ddukdo_info = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dduk_pic}></div>
            <span className={styles.title}>뚝도청춘시장</span>
            <div className={styles.sijang_about}>
                <div className={styles.icon_text}>
                    <div className={styles.liner}>
                        <img src="pics/location.png" className={styles.images}></img>
                        <p className={styles.infos}>서울 성동구 성수이로 32-15 2층</p>
                    </div>
                    <div className={styles.liner}>
                        <img src="pics/call.png" className={styles.images}></img>
                        <a href="tel" className={`${styles.infos} ${styles.phone_call}`}>02-464-4426</a>
                    </div>
                    <div className={styles.liner}>
                        <img src="pics/calender.png" className={styles.images}></img>
                        <p className={styles.infos}>매일 09:00 - 23:00</p>
                    </div>
                    <div className={styles.liner}>
                        <img src="pics/parking.png" className={styles.images}></img>
                        <p className={styles.infos}>주차 가능</p>
                    </div>
                </div>
            </div>
            <hr className={styles.hr_bar} />
            <div className={styles.jumpo}>시장 내 점포</div>
            <div className={styles.gridContainer}>
                <DivGrid />
            </div>



            <div className={styles.margin_div}></div>
        </div>
    );
};

export default Ddukdo_info;