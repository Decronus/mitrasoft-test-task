import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USER, SET_POSTS, SET_COMMENTS, SET_USER } from "../types/main";

export const fetchPostsCreator = () => ({
    type: FETCH_POSTS,
});

export const setPostsCreator = (postsArray) => ({
    type: SET_POSTS,
    payload: postsArray,
});

export const fetchCommentsCreator = (idObj) => ({
    type: FETCH_COMMENTS,
    payload: idObj,
});

export const setCommentsCreator = (commentsObj) => ({
    type: SET_COMMENTS,
    payload: commentsObj,
});

export const fetchUserCreator = (userIdObj) => ({
    type: FETCH_USER,
    payload: userIdObj,
});

export const setUserCreator = (userObj) => ({
    type: SET_USER,
    payload: userObj,
});
