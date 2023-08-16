import styles from "../css/Comment.module.css";
const Comment = ({ setParentId, writer_pic, writer, comment, replyId }) => {
  return (
    <div className={styles.container}>
      <img className={styles.profile} src={writer_pic}></img>
      <div>
        <div>{writer}</div>
        <div>{comment}</div>
        {setParentId && (
          <button
            onClick={(e) => {
              setParentId(replyId);
            }}
          >
            답글 달기
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
