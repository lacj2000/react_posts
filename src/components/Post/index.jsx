const Post = ({ url, title, body }) => (
    <div className="post">
        <img src={url} alt={title} />
        <div className="post-content">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);


export default Post;