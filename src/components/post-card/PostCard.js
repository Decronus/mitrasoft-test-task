import { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import CommentCard from "../comment-card/CommentCard";

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

            <Button variant="outline-primary" onClick={loadComments}>
                {commentsVisible ? "Скрыть комментарии" : "Комментарии"}
            </Button>

            {commentsVisible &&
                (comments ? (
                    <div className="comments-block">
                        {comments?.comments.map((comment) => (
                            <CommentCard key={uuidv4()} comment={comment} />
                        ))}
                    </div>
                ) : (
                    <Spinner animation="border" variant="primary" />
                ))}
        </div>
    );
};

export default PostCard;
