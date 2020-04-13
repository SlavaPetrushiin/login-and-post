import {UPDATE_SESSION, SystemActionTypes, AUTH_ERROR, AUTH_LOGOUT} from './types'
import {Dispatch} from "redux";

export function updateSession(newSession: boolean): SystemActionTypes {
    return {
        type: UPDATE_SESSION,
        session: newSession
    }
}

export function authError(): SystemActionTypes {
    return {
        type: AUTH_ERROR
    }
}

export function logout() {
    localStorage.removeItem('session');
    return {
        type: AUTH_LOGOUT
    }
}

export const  autoLogout = (time: number) => (dispatch : Dispatch): void => {
    setTimeout(() => {
        dispatch(logout())
    }, time * 1000);
};