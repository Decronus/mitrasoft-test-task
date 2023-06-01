import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator, fetchUserCreator } from "../store/actions/creators/main";
import { useEffect } from "react";
import PostCard from "../components/post-card/PostCard";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import UserCard from "../components/user-card/UserCard";
import { Button } from "react-bootstrap";

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { id: userId } = params;
    const state = useSelector((state) => state.mainReducer);
    const posts = state.posts;
    const userPosts = posts.filter((post) => post.userId === +userId);
    const user = state.currentObservedUser;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!posts.length) {
            dispatch(fetchPostsCreator());
        }
        dispatch(fetchUserCreator({ id: userId }));
    }, [userId]);

    const renderUserPosts = () => {
        if (!userPosts.length) {
            return <p>Посты не найдены</p>;
        }

        return userPosts.length ? (
            userPosts.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    navigateToUser={() => navigate(`/user/${post.userId}`)}
                    fetchComments={() => dispatch(fetchCommentsCreator({ id: post.id }))}
                />
            ))
        ) : (
            <Spinner animation="border" variant="primary" />
        );
    };

    return (
        <div className="user-page">
            <Button type="primary" style={{ marginBottom: "2rem" }} onClick={() => navigate("/")}>
                Назад
            </Button>
            <h1 className="h1-title">Подробности о пользователе</h1>
            <hr />
            <UserCard user={user} />
            <hr style={{ marginBottom: "4rem" }} />
            <h3 className="h3-title">Посты пользователя</h3>

            {renderUserPosts()}
        </div>
    );
};

export default User;
