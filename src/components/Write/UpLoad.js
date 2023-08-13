import * as React from "react";
import axios from "axios";

const FileUpload = () => {
  const [fileList, setFileList] = React.useState([]);

  const onSaveFiles = (e) => {
    const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들

    uploadFiles.forEach((uploadFile) => {
      setFileList((prevFileList) => [...prevFileList, uploadFile]);
    });
  };

  const onFileUpload = () => {
    const formData = new FormData();
    console.log("before!!", fileList);
    fileList.forEach((file) => {
      // 파일 데이터 저장
      formData.append("imgUrl", file);
    });
    console.log(fileList);

    // 객체
    const boardDto = {
      store_id: 1,
      score: 4.0,
      content: "좋아용~",
    };

    formData.append(
      "boardDto",
      new Blob([JSON.stringify(boardDto)], { type: "application/json" })
    ); // 직렬화하여 객체 저장

    try {
      const response = axios
        .post("http://localhost:8080/board/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Content-Type 설정
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={onSaveFiles} />
      <button onClick={onFileUpload}>파일 업로드</button>
    </div>
  );
};

export default FileUpload;
