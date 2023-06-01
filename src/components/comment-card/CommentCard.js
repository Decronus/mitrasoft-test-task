import { Badge } from "react-bootstrap";

const CommentCard = ({ comment }) => {
    return (
        <div className="comment-wrap">
            <Badge bg="secondary">{comment.email}</Badge>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentCard;
