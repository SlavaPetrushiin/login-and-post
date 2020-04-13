import axios from "axios";
import {IPost} from "../store/posts/types";

const apiPosts = {
    getPosts(): Promise<IPost[]>{
        return axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').then((response) => {
            return response.data
        })
    }
};

export default apiPosts;