import Post from "../Post";


const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post => <Post key={post.id} title={post.title} body={post.body} url={post.url} />)}
    </div>
);

export default Posts;