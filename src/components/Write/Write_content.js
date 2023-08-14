import React, { useState } from "react";
import styles from "../../css/Write_content.module.css";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import axios from "axios";
import FileUpload from "./UpLoad";
const Write_content = () => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    const data = {
      content: content,
      rating: ratingValue,
      // 이미지 데이터도 추가 가능
    };

    axios
      .post("http://54.180.53.205/board/viewAll", data)
      .then((res) => {
        console.log("Response:", res.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        alert(error.response.data.message);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title_}>새 게시물</h1>
      <textarea
        className={styles.text}
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="문구 입력 ..."
      />

      <div className={styles.imgControl}>
        <div className={styles.imgAdd}>사진 추가</div>
        <div className={styles.imageUpload}>
          <label htmlFor="fileInput" className={styles.addImg}>
            <img
              src="pics/+write.png"
              alt="파일 선택"
              className={styles.add_pics}
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>
      <hr />
      <div className={styles.addLocDiv}>
        <h3 className={styles.addLoc}>장소 추가</h3>
        <div
          className={`${styles.dropDown} ${
            isDropdownActive ? styles.active : ""
          }`}
          onClick={toggleDropdown}
        >
          <span className={styles.dropDownText}>
            <img src="pics/addLoc.png"></img>
          </span>
          <div className={styles.dropDownContent}>
            <ul>
              <li>성동구</li>
              <li>광진구</li>
              <li>강북구</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.star_box}>
        <h3 className={styles.star_ev}>별점 매기기</h3>
        <Rating
          className={styles.Rating}
          name="star_rating"
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.5,fontSize:"45px" }} />}
          icon={<StarIcon style={{ color: "rgba(255, 0, 0, 0.6)",fontSize:"45px" }} />}
          halfIcon={<StarHalfIcon style={{ color: "rgba(255, 0, 0, 0.6)",fontSize:"45px" }} />}
        ></Rating>
      </div>
      <button className={styles.Button} onClick={FileUpload}>
        공유
      </button>
    </div>
  );
};

export default Write_content;
