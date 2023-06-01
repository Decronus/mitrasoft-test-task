import "./style.css";
import { Accordion } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const PostCard = ({ post, onClick }) => {
    return (
        <div className="post-wrap">
            <div className="post-header">
                <div onClick={onClick}>
                    <div className="post-avatar" />
                </div>

                <h3>{post.title}</h3>
            </div>
            <p>{post.body}</p>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={onClick}>Комментарии</Accordion.Header>
                    <Accordion.Body>
                        {post?.comments?.map((comment) => (
                            <p key={uuidv4()}>{comment?.body}</p>
                        ))}
                        <p>text</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default PostCard;
