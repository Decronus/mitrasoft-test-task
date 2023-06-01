import { SET_POSTS_ERROR } from "../types/errors";

export const setPostsErrorCreator = () => ({
    type: SET_POSTS_ERROR,
    payload: "Ошибка при загрузке постов",
});
