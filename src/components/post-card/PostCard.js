import { useRef, useState } from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";

const PostCard = ({ post, onClick }) => {
    const [commentsVisible, setCommentsVisible] = useState(false);
    const accordionRef = useRef(null);

    const loadComments = () => {
        !post?.comments && onClick();
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
            <Button variant="primary" onClick={() => loadComments()}>
                {commentsVisible ? "Скрыть комментарии" : "Комментарии"}
            </Button>

            {commentsVisible && post?.comments?.map((comment) => <p key={uuidv4()}>{comment.body}</p>)}

            {/* <Accordion>
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={() => !post?.comments && loadComments()} ref={accordionRef}>
                        Комментарии
                    </Accordion.Header>
                    <Accordion.Body>
                        {post?.comments?.map((comment) => (
                            <p key={uuidv4()}>{comment.body}</p>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}
        </div>
    );
};

export default PostCard;
