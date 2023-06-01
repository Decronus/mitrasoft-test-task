import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsCreator, fetchCommentsCreator } from "../store/actions/creators/main";
import { useEffect, useRef, useState } from "react";
import PostCard from "../components/post-card/PostCard";
import { Spinner, Form, Pagination, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const posts = useSelector((state) => state.mainReducer.posts);

    useEffect(() => {
        dispatch(fetchPostsCreator());
    }, []);

    const [computedPosts, setСomputedPosts] = useState(posts);
    const searchInputRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState("");

    const computePostsFunc = () => {
        if (!searchQuery) {
            setСomputedPosts(posts);
        }
        const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setСomputedPosts(filteredPosts);
    };

    useEffect(() => {
        computePostsFunc();
    }, [searchQuery, posts]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalItems = computedPosts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const renderPostsPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const postsToRender = computedPosts.slice(startIndex, endIndex);

        return postsToRender.map((post) => (
            <PostCard
                key={post.id}
                post={post}
                navigateToUser={() => navigate(`/user/${post.userId}`)}
                fetchComments={() => dispatch(fetchCommentsCreator({ id: post.id }))}
            />
        ));
    };

    return (
        <div className="main-page">
            <h1 className="h1-title">Список постов</h1>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Поиск по заголовкам"
                    aria-label="Поиск по заголовкам"
                    aria-describedby="basic-addon"
                    ref={searchInputRef}
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon"
                    onClick={() => setSearchQuery(searchInputRef.current.value)}
                >
                    Поиск
                </Button>
            </InputGroup>

            {posts.length ? renderPostsPage() : <Spinner animation="border" variant="primary" />}

            <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                        key={index}
                        active={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default Main;
