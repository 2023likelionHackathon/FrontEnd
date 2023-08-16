import React from "react";
import BottomBar from "../components/BottomBar";
import SearchBar from "../components/SearchBar";
import { useRef } from "react";
import { useState } from "react";
import Write_content from "../components/Write/Write_content";

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
      <Write_content />
      <BottomBar index={"글쓰기"} />
    </div>
  );
};

export default Write_page;
