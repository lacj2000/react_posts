import { Component } from "react";
import { loadPosts } from "../../utils/load-posts"
import Posts from "../../components/Posts";
import Button from "../../components/Button";
import "./styles.css";




class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 20,
    };

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const {
            page,
            postsPerPage,
        } = this.state;
        const postsAndPhotos = await loadPosts();

        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos,
        });
    }

    loadMorePosts = () => {
        const {
            allPosts,
            posts,
            postsPerPage,
            page,
        } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

        posts.push(...nextPosts);
        this.setState({ posts, page: nextPage });
    }

    hasMorePosts = () => {
        const { posts, allPosts } = this.state;
        return (posts.length >= allPosts.length);
    }

    render() {
        const { posts } = this.state;
        const hasMorePosts = this.hasMorePosts();
        return (
            <section className="container">
                <Posts posts={posts}></Posts>
                <div className='button-container'>
                    <Button
                        text="Load more posts..."
                        disabled={hasMorePosts}
                        onClick={this.loadMorePosts}
                    />

                </div>
            </section>
        );
    }

}

export default Home;
