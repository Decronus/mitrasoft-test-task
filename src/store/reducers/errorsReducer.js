import { SET_COMMENTS_ERROR, SET_POSTS_ERROR, SET_USER_ERROR } from "../actions/types/errors";

const initialState = {
    postsError: "",
    commentsError: "",
    userError: "",
};

export default function errorsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_POSTS_ERROR: {
            return {
                ...state,
                postsError: payload,
            };
        }
        case SET_COMMENTS_ERROR: {
            return {
                ...state,
                commentsError: payload,
            };
        }
        case SET_USER_ERROR: {
            return {
                ...state,
                userError: payload,
            };
        }

        default:
            return state;
    }
}
