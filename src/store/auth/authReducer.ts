import {AUTH_ERROR, AUTH_LOGOUT, SystemActionTypes, UPDATE_SESSION} from "./types";

export interface IInitialStateAuth {
    username: string
    password: number
    session: boolean
    error: boolean
    errorMessage: string
}

const initialState: IInitialStateAuth = {
    username: 'Admin',
    password: 123123,
    session: false,
    error: false,
    errorMessage: 'Имя пользователя или пароль введены не верно'
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_SESSION:
            return {
                ...state,
                session: action.session,
                error: false
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                session: false
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state
    }
};

export default authReducer;