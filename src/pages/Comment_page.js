import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar";
import Comment from "../components/Comment";
import styles from "../css/Comment.module.css";

const Comment_page = () => {
  const { boardId } = useParams();
  const [content, setContent] = useState();
  const [comments, setComments] = useState();
  const [parentId, setParentId] = useState("");

  const getCommentList = async () => {
    console.log("?");

    const resp = await axios.get(
      `http://api.domarketdodo.shop/reply/view/${boardId}`,
      {
        withCredentials: true,
      }
    );
    setComments(resp.data); // posts에 data 할당
    console.log(comments);
    console.log("resp", resp.data);
  };

  useEffect(() => {
    getCommentList(); // 1) feed 조회 함수 호출
  }, []);

  axios.defaults.withCredentials = true;

  const createComment = async (content) => {
    console.log("parentId", {
      comment: content,
      boardId: boardId,
      parentId: parentId,
    });
    await axios
      .post(`http://api.domarketdodo.shop/reply/post/`, {
        comment: content,
        boardId: boardId,
        parentId: parentId,
      })
      .then((res) => {
        console.log("res", res.data);
        setComments(res.data);
      })
      .catch((error) => {
        console.log("Error : ", error);
        alert(error.response.data.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchBar></SearchBar>
      <div>
        <h3>댓글</h3>
      </div>
      <div className={styles.commentList}>
        <hr className={styles.h2} />
        {comments?.map((c) => {
          return (
            <div
              style={{
                marginTop: "28px",
              }}
            >
              <Comment
                parentId={parentId}
                setParentId={setParentId}
                {...c}
              ></Comment>
              <div
                style={{
                  marginLeft: "69px",
                  marginTop: "28px",
                }}
              >
                {c.children.map((rC) => {
                  return <Comment {...rC}></Comment>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.commentBox}>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createComment(content);
            }
          }}
          onChange={(e) => setContent(e.target.value)}
          placeholder="댓글 달기"
          className={styles.commentInput}
        ></input>
        <div className={styles.margin_div}></div>
      </div>
      <BottomBar index={"홈"}></BottomBar>
    </div>
  );
};

export default Comment_page;
