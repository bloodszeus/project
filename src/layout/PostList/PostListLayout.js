import React from "react";

import { Input } from "components/Input";
import { SelectPostValue } from "constants/SelectPostValue";
import { Header, Param } from "./style";
import { Loader } from "components/Loader";
import { Button } from "components/Button";
import { CreatePostModal } from "components/CreatePostModal";
import { Posts } from "./components/Posts";
import { Pagination } from "components/Pagination";

export const PostListLayout = ({
  posts,
  limit,
  search,
  limitResponse,
  isLoading,
  showMore,
  Search,
  setLike,
  showPost,
  deletePost,
  editPost,
  limitPost,
  setSkip,
}) => {
  return (
    <>
      <CreatePostModal />

      <Header>Posts</Header>

      <Input
        onChange={search}
        label={"Search"}
        type={"text"}
        id={"search"}
        placeholder={"Enter title or description"}
      />
      <Param>Show by</Param>
      <select onChange={limit}>
        {SelectPostValue.map((item) => (
          <option value={item.value} key={item.value}>
            {item.value}
          </option>
        ))}
      </select>

      {isLoading ? (
        posts.map((item, index) => (
          <Posts
            item={item}
            index={index}
            key={item._id}
            setLike={setLike}
            showPost={showPost}
            deletePost={deletePost}
            editPost={editPost}
          />
        ))
      ) : (
        <Loader />
      )}
      <Pagination
        total={limitResponse}
        limit={limitPost}
        setSkip={setSkip}
        search={Search}
      />

      {!Search && <Button onClick={showMore}>Show more</Button>}

      {!limitResponse && isLoading ? <Header> Posts not found</Header> : ""}
    </>
  );
};
