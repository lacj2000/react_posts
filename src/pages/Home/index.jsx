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
        postsPerPage: 10,
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
            posts,
            postsPerPage,
            page
        } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = posts.slice(nextPage, nextPage + postsPerPage);

        posts.push(...nextPosts);
        this.setState({ posts, page: nextPage });
    }

    render() {
        const { posts } = this.state;
        return (
            <section className="container">
                <Posts posts={posts}></Posts>
                <Button text="Load more posts" onClick={() => { console.log("click") }} />
            </section>
        );
    }
}

export default Home;
