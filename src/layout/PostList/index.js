import React, { useContext, useEffect, useState } from "react";
import { PostListLayout } from "./PostListLayout";
import { fetchPosts, setLike } from "API/api";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePostById } from "store/UserPostSlice";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [limitResponse, setLimitResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const { logged } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setLikeHandler = async (postId) => await setLike(postId);

  const handleShowModal = () => setShowModal((prev) => !prev);

  const handleLimit = ({ target }) => setLimit(target.value);

  const handleSearch = ({ target }) => setSearch(target.value);

  const ShowMoreHandler = () => setLimit((prev) => +prev + 10);

  const showPostHandler = (postId) => navigate(`/posts/post/${postId}`);

  const editPostHandler = (postId) => navigate(`/posts/post/${postId}/editing`);

  const deletePostHandler = (id) => {
    dispatch(deletePostById(id));
    setPosts(posts.filter((item) => item._id !== id));
  };

  useEffect(() => {
    (async () => {
      const response = await fetchPosts(limit, search, skip);
      if (response) setIsLoading(true);
      setPosts(response?.data?.data || []);
      setLimitResponse(response?.data?.pagination?.total || 0);
    })();
  }, [limit, search, skip]);

  return (
    <PostListLayout
      setSkip={setSkip}
      limitPost={limit}
      editPost={editPostHandler}
      deletePost={deletePostHandler}
      showPost={showPostHandler}
      setLike={setLikeHandler}
      logged={logged}
      Search={search}
      showMore={ShowMoreHandler}
      isLoading={isLoading}
      limitResponse={limitResponse}
      showState={{ showModal, setShowModal }}
      showModal={handleShowModal}
      posts={posts}
      limit={handleLimit}
      search={handleSearch}
    />
  );
};
