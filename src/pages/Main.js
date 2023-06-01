import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator } from "../store/actions/creators/main";
import { useEffect } from "react";
import PostCard from "../components/post-card/PostCard";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.mainReducer.posts);

    useEffect(() => {
        dispatch(fetchPostsCreator());
    }, []);

    return (
        <div className="main-page">
            <h1 className="h1-title">Список постов</h1>
            {posts.length ? (
                posts.map((post) => (
                    <PostCard
                        key={uuidv4()}
                        post={post}
                        navigateToUser={() => navigate(`/user/${post.userId}`)}
                        fetchComments={() => dispatch(fetchCommentsCreator({ id: post.id }))}
                    />
                ))
            ) : (
                <Spinner animation="border" variant="primary" />
            )}
        </div>
    );
};

export default Main;
