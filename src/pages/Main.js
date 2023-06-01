import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator } from "../store/actions/creators/main";
import { useEffect } from "react";
import PostCard from "../components/post-card/PostCard";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "react-bootstrap";

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.mainReducer.posts);

    useEffect(() => {
        dispatch(fetchPostsCreator());
    }, []);

    return (
        <div className="main-page">
            {posts.length ? (
                posts.map((post) => (
                    <PostCard
                        key={uuidv4()}
                        post={post}
                        onClick={() => dispatch(fetchCommentsCreator({ id: post.id }))}
                    />
                ))
            ) : (
                <Spinner animation="border" variant="primary" />
            )}
        </div>
    );
};

export default Main;
