import React, { useState } from "react";
import { useRef } from "react";
import styles from "../../css/Write_content.module.css";
import axios from "axios";

const Write_content = () => {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
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
    // axios
    //   .post("http://localhost:8080/authorize", {
    //     ,
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error.response.data.message);
    //     alert(error.response.data.message);
    //   });
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
      <h1 className={styles.imgAdd}>사진 추가</h1>
      <div className={styles.imgControl}>
        <div className={styles.imageUpload}>
          <label htmlFor="fileInput" className={styles.addImg}>
            <img src="pics/+write.png" alt="파일 선택" />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </label>

          {/* {selectedImage && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={selectedImage}
                alt="선택한 사진"
                style={{ maxWidth: "30px", height: "auto" }}
              />
            </div>
          )} */}
        </div>
      </div>
      <hr />
      <div className={styles.addLocDiv}>
        <h1 className={styles.addLoc}>장소 추가</h1>
        <div className={styles.addLocBtn}>
          <input id="dropdown" type="checkbox" />

          <label className="dropdownLabel" for="dropdown">
            <div>CSS</div>
            <div className="caretIcon" />
          </label>
          <div className="content">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <h3 className={styles.star_ev}>별점 매기기</h3>
      <img className={styles.star} src="pics/star.png"></img>
      <button className={styles.Button} onClick={handleUpload}>
        공유
      </button>
    </div>
  );
};

export default Write_content;
