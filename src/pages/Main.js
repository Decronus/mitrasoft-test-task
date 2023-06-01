import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator } from "../store/actions/creators/main";
import { useEffect } from "react";
import PostCard from "../components/post-card/PostCard";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.mainReducer.posts);
    console.log(posts);
    const handleFetchComments = (id) => {
        dispatch(fetchCommentsCreator({ id }));
        console.log("User id:", id);
    };

    useEffect(() => {
        dispatch(fetchPostsCreator());
    }, []);

    return (
        <div className="main-page">
            {/* <h1>Главная</h1>
            <button onClick={() => dispatch(fetchPostsCreator())}>Click me!</button>
            <button onClick={() => dispatch(fetchCommentsCreator({ id: 2 }))}>Click me!</button> */}

            {posts?.map((post) => (
                <PostCard key={uuidv4()} post={post} onClick={() => handleFetchComments(post.id)} />
            ))}
        </div>
    );
};

export default Main;
