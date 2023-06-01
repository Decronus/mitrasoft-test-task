import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USER, SET_POSTS, SET_COMMENTS, SET_USER } from "../types/main";

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

export const fetchUserCreator = (payload) => ({
    type: FETCH_USER,
    payload,
});

export const setUserCreator = (payload) => ({
    type: SET_USER,
    payload,
});
