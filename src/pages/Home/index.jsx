import { Component } from "react";
import { loadPosts } from "../../utils/load-posts"
import Posts from "../../components/Posts";
import Button from "../../components/Button";
import "./styles.css";




class Home extends Component {
    state = {
        searchValue: "",
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

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { allPosts, posts, searchValue } = this.state;

        const hasMorePosts = this.hasMorePosts();
        const listenPosts = !!searchValue ?
            allPosts.filter(
                post => {
                    return (
                        (post.title.toLowerCase().includes(searchValue.toLowerCase()))
                        ||
                        (post.body.toLowerCase().includes(searchValue.toLowerCase()))
                    );
                }) :
            posts;

        return (
            <section className="container">
                {!!searchValue &&
                    <h3>Searching for: {searchValue}</h3>
                }
                <div className="input-container">
                    <input
                        name="searchValue"
                        type="search"
                        value={searchValue}
                        onChange={this.handleChange}
                    />
                </div>
                <Posts posts={listenPosts}></Posts>

                {!searchValue &&
                    <div className="button-container">
                        <Button
                            text="Load more posts..."
                            disabled={hasMorePosts}
                            onClick={this.loadMorePosts}
                        />
                    </div>
                }
            </section>
        );
    }

}

export default Home;
