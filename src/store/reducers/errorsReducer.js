import { SET_POSTS_ERROR } from "../actions/types/errors";

const initialState = {
    postsError: "",
};

export default function errorsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_POSTS_ERROR: {
            return {
                ...state,
                postsError: payload,
            };
        }

        default:
            return state;
    }
}
