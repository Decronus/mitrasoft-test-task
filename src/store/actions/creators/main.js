import { FETCH_POSTS, FETCH_COMMENTS, SET_POSTS, SET_COMMENTS } from "../types/main";

export const fetchPostsCreator = () => ({
    type: FETCH_POSTS,
});

export const setPostsCreator = (payload) => ({
    type: SET_POSTS,
    payload,
});

export const fetchCommentsCreator = (payload) => ({
    type: FETCH_COMMENTS,
    payload,
});

export const setCommentsCreator = (payload) => ({
    type: SET_COMMENTS,
    payload,
});
