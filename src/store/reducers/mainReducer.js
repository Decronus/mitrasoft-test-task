import { SET_POSTS, SET_COMMENTS } from "../actions/types/main";

const initialState = {
    posts: null,
};

export default function mainReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: payload,
            };
        }
        case SET_COMMENTS: {
            const { id, comments } = payload;
            const newPosts = state.posts.map((post) => {
                if (post.id === id) {
                    return (post.comments = comments);
                }
            });

            return {
                ...state,
                posts: newPosts,
            };
        }
        default:
            return state;
    }
}
