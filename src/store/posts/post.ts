import {FETCH_SUCCESS_POSTS, IPost} from "./types";
import {Dispatch} from "redux";
import apiPosts from "../../api/apiPosts";

export function successPosts(posts: IPost[]) {
    return {
        type: FETCH_SUCCESS_POSTS,
        posts
    }
}

export const fetchPosts = () => async (dispatch: Dispatch) => {
    try {
        debugger
        const posts = await apiPosts.getPosts();
        dispatch(successPosts(posts));
    } catch (error) {

    }
};



