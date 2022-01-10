import { useState, useEffect, useCallback } from 'react';
import { loadPosts } from '../../utils/load-posts';
import Posts from '../../components/Posts';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import './styles.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(20);
  const [searchValue, setSearchValue] = useState('');

  const hasMorePosts = posts.length >= allPosts.length;

  const listedPosts = searchValue
    ? allPosts.filter((post) => {
        return (
          post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          post.body.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="container">
      {!!searchValue && <h1>Searched value: {searchValue}</h1>}
      <div className="search-container">
        <TextInput value={searchValue} onChange={handleChange} />
      </div>
      {listedPosts.length > 0 ? <Posts posts={listedPosts}></Posts> : <p>This search did not find matching posts</p>}
      {!searchValue && (
        <div className="button-container">
          <Button text="Load more posts..." disabled={hasMorePosts} onClick={loadMorePosts} />
        </div>
      )}
    </section>
  );
};

export default Home;
