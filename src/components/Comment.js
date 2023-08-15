
import styles from "../css/Comment.module.css";
const Comment = ({writer_pic, writer, comment}) => {
    return (
        <div className={styles.container}>
            <img className={styles.profile} src={writer_pic}></img>
            <div>
                <div>
                    {writer}
                </div>
                <div>
                    {comment}
                </div>
            </div>
        </div>
    )
}

export default Comment;