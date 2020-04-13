export const FETCH_SUCCESS_POSTS = 'FETCH_SUCCESS_POSTS';

export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export interface FetchSuccessPostAction{
    type: typeof FETCH_SUCCESS_POSTS;
    posts: IPost[]
}