import { SET_POSTS_ERROR, SET_COMMENTS_ERROR, SET_USER_ERROR } from "../types/errors";

export const setPostsErrorCreator = (errorText) => ({
    type: SET_POSTS_ERROR,
    payload: errorText,
});

export const setCommentsErrorCreator = (errorText) => ({
    type: SET_COMMENTS_ERROR,
    payload: errorText,
});

export const setUserErrorCreator = (errorText) => ({
    type: SET_USER_ERROR,
    payload: errorText,
});
