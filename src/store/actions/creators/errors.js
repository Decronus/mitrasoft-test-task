import { SET_POSTS_ERROR, SET_COMMENTS_ERROR, SET_USER_ERROR } from "../types/errors";

export const setPostsErrorCreator = (payload) => ({
    type: SET_POSTS_ERROR,
    payload,
});

export const setCommentsErrorCreator = (payload) => ({
    type: SET_COMMENTS_ERROR,
    payload,
});

export const setUserErrorCreator = (payload) => ({
    type: SET_USER_ERROR,
    payload,
});
