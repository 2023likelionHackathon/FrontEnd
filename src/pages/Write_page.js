import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import styles from "../css/writeContent.module.css";
import { useRef } from "react";
import { useState } from "react";

const Write_page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const imageInputRef = useRef("");
  const [img, setImg] = useState("");
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImg(selectedImage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 폼 데이터를 서버에 보내는 로직을 추가할 수 있습니다.
    console.log("제목:", title);
    console.log("내용:", content);
    // 폼 데이터를 초기화합니다.
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <SearchBar />
      <div className={styles.container}>
        <h1>새 게시물</h1>
        {/* <form onSubmit={handleSubmit}></form> */}

        <div className={styles.writeContent}>
          <textarea
            placeholder="문구 입력..."
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="image" className="imageBtn">
            사진 추가
            <input
              type="file"
              accept="image/*"
              id="image"
              ref={imageInputRef}
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div>장소 추가 </div>
        <div>별점 매기기</div>
        <button></button>
      </div>

      <BottomBar />
    </div>
  );
};

export default Write_page;
