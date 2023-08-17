import React, { useState } from "react";
import styles from "../../css/Write_content.module.css";
import { Rating, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import axios from "axios";
import FileUpload from "./UpLoad";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const CustomBackdrop = styled("div")({});

const modalStyle = {
  display: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "white",
  zIndex: "1000",
  border: "1px solid black",
  width: "300px",
  height: "600px",
  maxHeight: "600px",
  overflow: "scroll",
};

const Write_content = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  //const [selectedImage, setSelectedImage] = useState(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [ratingValue, setRatingValue] = useState(0); //별점 값

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [storeId, setStoreId] = useState();
  const [fileList, setFileList] = React.useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    toggleModal();
  };
  const handleTagSelect = (tag, storeId) => {
    setSelectedTag(tag);
    setStoreId(storeId);
    console.log(tag);
    console.log(storeId);
  };
  const handleRatingChange = (newValue) => {
    console.log(newValue);
    setRatingValue(newValue);
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };
  const onSaveFiles = (e) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach((uploadFile) => {
      setFileList((prevFileList) => [...prevFileList, uploadFile]);
    });
  };

  const onFileUpload = () => {
    navigate("/");
    const formData = new FormData();
    fileList.forEach((file) => {
      // 파일 데이터 저장
      formData.append("imgUrl", file);
    });
    console.log(fileList);

    // 객체
    const boardDto = {
      store_id: storeId,
      score: parseInt(ratingValue),
      content: content,
    };
    console.log(boardDto);
    axios.defaults.withCredentials = true; // 전역 설정
    formData.append(
      "boardDto",
      new Blob([JSON.stringify(boardDto)], { type: "application/json" })
    ); // 직렬화하여 객체 저장

    try {
      const response = axios
        .post("http://api.domarketdodo.shop/board/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Content-Type 설정
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("글 등록에 성공하셨습니다!");
          navigate("/");
        })
        .catch((error) => {
          alert(error.response.data.message);
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.emptySpace2}></div>
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
              onChange={onSaveFiles}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>
      <hr />
      <div className={styles.addLocDiv}>
        <div className={styles.addLocHeader}>
          <h3 className={styles.addLoc}>장소 추가</h3>
          {selectedPlace && (
            <div className={styles.selectedItems}>
              <span>선택한 시장: {selectedPlace}</span>
              <br />
              {selectedTag && <span>선택한 매장: {selectedTag}</span>}
            </div>
          )}
        </div>
        <div
          className={`${styles.dropDown} ${
            isDropdownActive ? styles.active : ""
          }`}
          onClick={toggleDropdown}
        >
          <span className={styles.dropDownText}>
            <img src="pics/addLoc.png" />
          </span>
          <div className={styles.dropDownContent}>
            <ul>
              <li onClick={() => handlePlaceSelect("뚝도청춘시장")}>
                뚝도청춘시장
              </li>
              <li onClick={() => handlePlaceSelect("금남시장")}>금남시장</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        className={styles.pop_up}
        BackdropComponent={CustomBackdrop}
        style={modalStyle}
      >
        <div className={styles.modalContent}>
          <h2 className={styles.choose_}>장소 선택</h2>
          <ul>
            {selectedPlace === "뚝도청춘시장" && (
              <>
                <li
                  onClick={() => handleTagSelect("2002횟집", 1)}
                  className={`${styles.list_} ${
                    selectedTag === "2002횟집" ? styles.selected : ""
                  }`}
                >
                  2002횟집
                </li>
                <li
                  onClick={() => handleTagSelect("대성정", 2)}
                  className={`${styles.list_} ${
                    selectedTag === "대성정" ? styles.selected : ""
                  }`}
                >
                  대성정
                </li>
                <li
                  onClick={() => handleTagSelect("떡마을", 3)}
                  className={`${styles.list_} ${
                    selectedTag === "떡마을" ? styles.selected : ""
                  }`}
                >
                  떡마을
                </li>
                <li
                  onClick={() => handleTagSelect("뚝도지기", 4)}
                  className={`${styles.list_} ${
                    selectedTag === "뚝도지기" ? styles.selected : ""
                  }`}
                >
                  뚝도지기
                </li>
                <li
                  onClick={() => handleTagSelect("뚱이네포차", 5)}
                  className={`${styles.list_} ${
                    selectedTag === "뚱이네포차" ? styles.selected : ""
                  }`}
                >
                  뚱이네포차
                </li>
                <li
                  onClick={() => handleTagSelect("락지", 6)}
                  className={`${styles.list_} ${
                    selectedTag === "락지" ? styles.selected : ""
                  }`}
                >
                  락지
                </li>

                <li
                  onClick={() => handleTagSelect("미정이네 코다리찜", 7)}
                  className={`${styles.list_} ${
                    selectedTag === "미정이네 코다리찜" ? styles.selected : ""
                  }`}
                >
                  미정이네 코다리찜
                </li>
                <li
                  onClick={() => handleTagSelect("서울맛집", 8)}
                  className={`${styles.list_} ${
                    selectedTag === "서울맛집" ? styles.selected : ""
                  }`}
                >
                  서울맛집
                </li>
                <li
                  onClick={() => handleTagSelect("연탄생고기", 9)}
                  className={`${styles.list_} ${
                    selectedTag === "연탄생고기" ? styles.selected : ""
                  }`}
                >
                  연탄생고기
                </li>
                <li
                  onClick={() => handleTagSelect("연탄요리집", 10)}
                  className={`${styles.list_} ${
                    selectedTag === "연탄요리집" ? styles.selected : ""
                  }`}
                >
                  연탄요리집
                </li>
                <li
                  onClick={() => handleTagSelect("영수분식", 11)}
                  className={`${styles.list_} ${
                    selectedTag === "영수분식" ? styles.selected : ""
                  }`}
                >
                  영수분식
                </li>
                <li
                  onClick={() => handleTagSelect("우리동네칼국수", 12)}
                  className={`${styles.list_} ${
                    selectedTag === "우리동네칼국수" ? styles.selected : ""
                  }`}
                >
                  우리동네칼국수
                </li>
                <li
                  onClick={() => handleTagSelect("은식당", 13)}
                  className={`${styles.list_} ${
                    selectedTag === "은식당" ? styles.selected : ""
                  }`}
                >
                  은식당
                </li>
                <li
                  onClick={() => handleTagSelect("지수언니", 14)}
                  className={`${styles.list_} ${
                    selectedTag === "지수언니" ? styles.selected : ""
                  }`}
                >
                  지수언니
                </li>
                <li
                  onClick={() => handleTagSelect("호랑이식탁", 15)}
                  className={`${styles.list_} ${
                    selectedTag === "호랑이식탁" ? styles.selected : ""
                  }`}
                >
                  호랑이식탁
                </li>
                <li
                  onClick={() => handleTagSelect("훈이네", 16)}
                  className={`${styles.list_} ${
                    selectedTag === "훈이네" ? styles.selected : ""
                  }`}
                >
                  훈이네
                </li>
              </>
            )}
            {selectedPlace === "금남시장" && (
              <>
                <span className={styles.no_jumpo}>등록된 점포가 없습니다.</span>
              </>
            )}
          </ul>
          <div className={styles.select__btns}>
            <button
              className={styles.Ok_btn}
              onClick={() => {
                toggleModal();
              }}
            >
              확인
            </button>
            <button
              className={styles.cancel_btn}
              onClick={() => {
                toggleModal();
              }}
            >
              취소
            </button>
            <button
              className={styles.init_btn}
              onClick={() => {
                handlePlaceSelect("");
                handleTagSelect("");
              }}
            >
              초기화
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.star_box}>
        <h3 className={styles.star_ev}>별점 매기기</h3>
        <Rating
          className={styles.Rating}
          name="star_rating"
          precision={0.5}
          value={ratingValue}
          onChange={(e) => handleRatingChange(e.target.value)}
          emptyIcon={<StarIcon style={{ opacity: 0.5, fontSize: "45px" }} />}
          icon={
            <StarIcon
              style={{ color: "rgba(255, 0, 0, 0.6)", fontSize: "45px" }}
            />
          }
          halfIcon={
            <StarHalfIcon
              style={{ color: "rgba(255, 0, 0, 0.6)", fontSize: "45px" }}
            />
          }
        ></Rating>
      </div>
      <div>
        <button className={styles.Button} onClick={onFileUpload}>
          공유
        </button>
        <div className={styles.emptySpace}></div>
      </div>
    </div>
  );
};

export default Write_content;
