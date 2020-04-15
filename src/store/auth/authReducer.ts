import {AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS, SystemActionTypes, UPDATE_SESSION} from "./types";


const initialState = {
    token: null as string | null,
    authError: null as string | null
};

type StateType = typeof initialState

const authReducer = (state = initialState, action: SystemActionTypes): StateType => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            };
        case AUTH_ERROR:
            return {
                ...state,
                authError: action.errorMassage
            };
        default:
            return state
    }
};

export default authReducer;