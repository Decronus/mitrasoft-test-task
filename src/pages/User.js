import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator, fetchUserCreator } from "../store/actions/creators/main";
import { useEffect } from "react";
import PostCard from "../components/post-card/PostCard";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { id: userId } = params;
    const posts = useSelector((state) => state.mainReducer.posts);
    const userPosts = posts.filter((post) => post.userId === +userId);

    useEffect(() => {
        if (!posts.length) {
            dispatch(fetchPostsCreator());
        }
        dispatch(fetchUserCreator({ id: userId }));
    }, [userId]);

    return (
        <div className="user-page">
            {userPosts.length ? (
                userPosts.map((post) => (
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

export default User;
