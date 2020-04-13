import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth/authReducer";
import thunk, {ThunkMiddleware} from "redux-thunk";
import postsReducer from "./posts/postsReducer";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, any>));

// @ts-ignore
window.store = store