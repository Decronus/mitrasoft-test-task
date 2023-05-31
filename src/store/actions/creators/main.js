import { FETCH_POSTS } from "../types/main";

export const fetchPosts = (posts) => ({
    type: FETCH_POSTS,
    payload: posts,
});
