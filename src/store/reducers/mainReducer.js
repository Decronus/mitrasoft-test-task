import { SET_POSTS, SET_COMMENTS } from "../actions/types/main";

const initialState = {
    posts: [],
    comments: [],
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
            const postComments = state.comments.find((el) => el.postId === id);

            if (postComments) {
                return state;
            } else {
                const newComments = [...state.comments];
                const commentsObj = { postId: id, comments: comments };
                newComments.push(commentsObj);
                return {
                    ...state,
                    comments: newComments,
                };
            }
        }
        // case SET_COMMENTS: {
        //     const { id, comments } = payload;
        //     const updatedPosts = state.posts.map((post) => {
        //         if (post.id === id) {
        //             return {
        //                 ...post,
        //                 comments: comments,
        //             };
        //         }
        //         return post;
        //     });
        //     return {
        //         ...state,
        //         posts: updatedPosts,
        //     };
        // }
        default:
            return state;
    }
}
