import React from 'react';

const WriteBar = () => {
    return (
        <div>
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
    );
};

export default WriteBar;