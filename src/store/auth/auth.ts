import {
    SystemActionTypes,
    AUTH_ERROR,
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    AuthLogoutAction,
    AuthSuccessAction,
    AuthErrorAction
} from './types'
import apiAuth from "../../api/apiAuth";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";

export function authSuccess(token: string): AuthSuccessAction {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function authError(errorMassage: string): AuthErrorAction {
    return {
        type: AUTH_ERROR,
        errorMassage
    }
}

export function logout() {
    return new Promise((res, rej) => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationData');
        res()
    })
}

export function logoutAC(): AuthLogoutAction {
    return {
        type: AUTH_LOGOUT
    }
}

// ---------------   ThunkCreator
type ThunkActionType = ThunkAction<Promise<void>, RootState, unknown, SystemActionTypes>

export const login = (username: string, password: string): ThunkActionType => async (dispatch) => {
    try {
        const data = await apiAuth.fetchAuth(username, password);
        const {idToken, expiresIn} = data;
        const expirationData: Date = new Date(new Date().getTime() + (Number(expiresIn) * 1000));

        localStorage.setItem('token', idToken);
        localStorage.setItem('expirationData', expirationData.toString());

        dispatch(authSuccess(idToken));
        dispatch(autoLogout(Number(expiresIn)));
    } catch (error) {
        dispatch(authError(error.errorMessage))
    }
};

export const btnExitLogout = (): ThunkActionType => async (dispatch) => {
    await logout()
    dispatch(logoutAC())
};

export const autoLogout = (time: number): ThunkActionType => async (dispatch) => {
    setTimeout(async () => {
        await logout()
        dispatch(logoutAC())
    }, time * 1000);
};

export const autoLogin = (): ThunkActionType => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logoutAC())
    } else {
        const expirationData =  new Date (localStorage.getItem('expirationData')  as string) ;
        if(expirationData <= new Date()){
            dispatch(logoutAC());
        } else {
            dispatch(authSuccess(token));
            dispatch(autoLogout(new Date(expirationData).getTime() - (new Date().getTime()) / 1000));
        }
    }
};