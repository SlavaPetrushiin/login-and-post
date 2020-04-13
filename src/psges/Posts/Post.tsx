import React from "react";
import {IPost} from "../../store/posts/types";
import cls from "./Posts.module.css";

const Post = (props: IPost) => {
    return (
        <div className={cls.post}>
            <h5 className={cls.title}>{props.title}</h5>
            <p>{props.body}</p>
        </div>
    )
};

export default Post;