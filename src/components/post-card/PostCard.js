import { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const PostCard = ({ post, onClick }) => {
    const [commentsVisible, setCommentsVisible] = useState(false);
    const commentsState = useSelector((state) => state.mainReducer.comments);
    const comments = commentsState.find((el) => post.id === el.postId);

    const loadComments = () => {
        !comments && onClick();
        setCommentsVisible(!commentsVisible);
    };

    return (
        <div className="post-wrap">
            <div className="post-header">
                <div onClick={onClick}>
                    <div className="post-avatar" />
                </div>

                <h3>{post.title}</h3>
            </div>
            <p>{post.body}</p>

            <Button variant="primary" onClick={loadComments}>
                {commentsVisible ? "Скрыть комментарии" : "Комментарии"}
            </Button>
            {commentsVisible &&
                (comments ? (
                    comments?.comments.map((comment) => <p key={uuidv4()}>{comment.body}</p>)
                ) : (
                    <Spinner animation="border" />
                ))}
        </div>
    );
};

export default PostCard;
