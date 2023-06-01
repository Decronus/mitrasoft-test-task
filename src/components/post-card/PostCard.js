import { useState } from "react";
import "./style.css";
import { Button, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import CommentCard from "../comment-card/CommentCard";
import UserAvatar from "../user-avatar/UserAvatar";

const PostCard = ({ post, fetchComments, navigateToUser }) => {
    const [commentsVisible, setCommentsVisible] = useState(false);
    const commentsState = useSelector((state) => state.mainReducer.comments);
    const comments = commentsState?.find((el) => post.id === el.postId);

    const commentsError = useSelector((state) => state.errorsReducer.commentsError);

    const loadComments = () => {
        !comments && fetchComments();
        setCommentsVisible(!commentsVisible);
    };

    const renderComments = () => {
        if (commentsVisible && commentsError) {
            return <p>{commentsError}</p>;
        }

        if (commentsVisible && comments && !comments?.comments.length) {
            return <p>Комментариев нет</p>;
        }

        if (commentsVisible) {
            return comments?.comments.length ? (
                <div className="comments-block">
                    {comments?.comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>
            ) : (
                <Spinner animation="border" variant="primary" />
            );
        }
    };

    return (
        <div className="post-wrap">
            <div className="post-header">
                <UserAvatar navigateToUser={navigateToUser} />
                <h3>{post.title}</h3>
            </div>
            <p>{post.body}</p>

            <Button variant="outline-primary" onClick={loadComments}>
                {commentsVisible ? "Скрыть комментарии" : "Комментарии"}
            </Button>

            {renderComments()}
        </div>
    );
};

export default PostCard;
