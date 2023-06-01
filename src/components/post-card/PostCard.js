import "./style.css";

const PostCard = ({ title, body }) => {
    return (
        <div className="post-wrap">
            <div className="post-header">
                <div className="post-avatar" />
                <h3>{title}</h3>
            </div>
            <p>{body}</p>
        </div>
    );
};

export default PostCard;
