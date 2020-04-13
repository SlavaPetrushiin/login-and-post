export const UPDATE_SESSION = 'UPDATE_SESSION';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

interface UpdateSessionAction {
    type: typeof UPDATE_SESSION
    session: boolean
}

interface AuthErrorAction {
    type: typeof AUTH_ERROR
}

interface AuthLogoutAction {
    type: typeof AUTH_LOGOUT
}

export type SystemActionTypes = UpdateSessionAction | AuthErrorAction | AuthLogoutAction