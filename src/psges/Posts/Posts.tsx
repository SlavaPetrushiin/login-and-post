import React, {Component} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {fetchPosts} from "../../store/posts/post";
import {IPost} from "../../store/posts/types";
import cls from "./Posts.module.css";
import Post from "./Post";
import Loader from "../../component/Loader/Loader";

interface IMapStateToProps {
    posts: any
}

interface IMapDispatchToProps {
    fetchPosts: () => void
}


class Posts extends Component<IMapStateToProps & IMapDispatchToProps> {
    componentDidMount(): void {
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return this.props.posts.map((post: IPost) => {
            return <Post {...post} key={post.id + Math.random() * 1000}/>}
        )
    };

    render() {
        return (
            <div className={cls.posts}>
                {this.props.posts === 0
                    ? <Loader />
                    : this.renderPosts()
                }
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.posts.posts
    }
};

export default connect(mapStateToProps, {fetchPosts})(Posts);