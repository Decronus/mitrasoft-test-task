import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator } from "../store/actions/creators/main";
import { useEffect } from "react";
import PostCard from "../components/post-card/PostCard";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.mainReducer.posts);
    console.log(posts);

    useEffect(() => {
        dispatch(fetchPostsCreator());
    }, []);

    return (
        <div className="main-page">
            {/* <h1>Главная</h1>
            <button onClick={() => dispatch(fetchPostsCreator())}>Click me!</button>
            <button onClick={() => dispatch(fetchCommentsCreator({ id: 2 }))}>Click me!</button> */}

            {posts?.map((post) => (
                <PostCard title={post.title} body={post.body} key={uuidv4()} />
            ))}
        </div>
    );
};

export default Main;
