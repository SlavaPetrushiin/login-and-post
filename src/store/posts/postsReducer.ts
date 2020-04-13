import {FETCH_SUCCESS_POSTS, IPost} from "./types";

const initialState = {
    posts: [] as IPost[]
};

const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_SUCCESS_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            };
        default:
            return state
    }
};

export default postsReducer;