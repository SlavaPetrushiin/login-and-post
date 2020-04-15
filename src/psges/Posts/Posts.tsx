import React, {Component} from 'react';
import {connect} from "react-redux";
import {RootState} from "../../store/store";
import {fetchPosts} from "../../store/posts/post";
import {IPost} from "../../store/posts/types";
import cls from "./Posts.module.css";
import Post from "./Post";
import Loader from "../../component/Loader/Loader";

interface IMapStateToProps {
    posts: IPost[]
}

interface IMapDispatchToProps {
    fetchPosts: () => void
}

class Posts extends Component<IMapStateToProps & IMapDispatchToProps> {
    componentDidMount(): void {
        this.props.fetchPosts();
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const windowHeight = window.innerHeight;
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        if(scrollHeight - windowHeight < window.pageYOffset + 20) {
            this.props.fetchPosts();
        }
    };

    renderPosts = () => {
        return this.props.posts.map((post: IPost) => {
                return <Post {...post} key={post.id + new Date().toString()}/>
            }
        )
    };

    render() {

        return (
            <div className={cls.posts}>
                {!this.props.posts.length
                    ? <Loader/>
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