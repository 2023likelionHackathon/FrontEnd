import React, { useState } from "react";
import styles from "../../css/Write_content.module.css";
const Write_content = () => {
  const [content, setContent] = useState("");
  return (
    <div className={styles.container}>
      <h1>새 게시물</h1>
      <textarea
        className={styles.text}
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="문구 입력 ..."
      />
    </div>
  );
};

export default Write_content;
