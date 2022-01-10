import P from 'prop-types';
import Post from '../Post';
import './styles.css';

const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <Post key={post.id} title={post.title} body={post.body} url={post.url} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      url: P.string.isRequired,
      title: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};

export default Posts;
