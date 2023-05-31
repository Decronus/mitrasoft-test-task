import { FETCH_POSTS } from "../actions/types/main";

const initialState = {
    users: null,
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            return {
                ...state,
                user: action.payload,
            };
        }

        default:
            return state;
    }
}
