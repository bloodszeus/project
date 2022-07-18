import React, { useEffect, useMemo, useState } from "react";
import { PostListLayout } from "./PostListLayout";

import { useDispatch, useSelector } from "react-redux";
import {
  allParams,
  getAllPosts,
  postsAll,
  postsStatus,
} from "store/AllPostSlice";

export const PostList = () => {
  const params = useSelector(allParams);
  const status = useSelector(postsStatus);
  const allPosts = useSelector(postsAll);
  const firstLoad = useSelector((state) => state.allPosts.firstLoad);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [param, setParam] = useState({
    limit: 9,
    search: "",
    skip: 0,
  });

  useMemo(() => setTotalPages(params.total), [params.total]);

  useEffect(() => {
    dispatch(getAllPosts(param));
  }, [param.limit, param.search, param.skip]);

  const handleLimit = ({ target }) =>
    setParam({ ...param, limit: Number(target.value) });

  const handleSearch = ({ target }) =>
    setParam({ ...param, search: target.value, limit: 10 });

  const showMoreHandler = () =>
    setParam((prevState) => ({ ...prevState, limit: prevState.limit + 9 }));

  return (
    <PostListLayout
      firstLoad={firstLoad}
      showMore={showMoreHandler}
      setSkip={setParam}
      limitPost={param.limit}
      search={param.search}
      isLoading={status}
      totalPages={totalPages}
      posts={allPosts}
      limit={handleLimit}
      handleSearch={handleSearch}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};
