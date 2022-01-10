import P from 'prop-types';
import './styles.css';

const Post = ({ url, title, body }) => (
  <div className="post">
    <img src={url} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

Post.propTypes = {
  url: P.string.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};

export default Post;
