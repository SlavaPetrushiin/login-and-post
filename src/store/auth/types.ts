export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';


export interface AuthSuccessAction{
    type: typeof AUTH_SUCCESS
    token: string
}

export interface AuthErrorAction {
    type: typeof AUTH_ERROR,
    errorMassage: string
}

export interface AuthLogoutAction {
    type: typeof AUTH_LOGOUT
}

export type SystemActionTypes = AuthErrorAction | AuthLogoutAction | AuthSuccessAction