import { useDispatch } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator } from "../store/actions/creators/main";
import { useEffect } from "react";

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsCreator());
    });

    return (
        <div className="main-page">
            <h1>Главная</h1>
            <button onClick={() => dispatch(fetchPostsCreator())}>Click me!</button>
            <button onClick={() => dispatch(fetchCommentsCreator({ id: 2 }))}>Click me!</button>
        </div>
    );
};

export default Main;
