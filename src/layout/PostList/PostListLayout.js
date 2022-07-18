import React from "react";

import { SelectPostValue } from "constants/SelectPostValue";
import {
  Header,
  Param,
  PostsWrapper,
  Search,
  SelectBlock,
  ShowBy,
  ShowMoreBtn,
  ViewSetting,
} from "./style";
import { Loader } from "components/Loader";
import { CreatePostModal } from "components/CreatePostModal";
import { Pagination } from "components/Pagination";
import { PostItem } from "components/PostItem";
import { ScrollToTopBtn } from "components/ScrollToTopBtn";
import { Icons } from "components/Icons";

export const PostListLayout = ({
  posts,
  limit,
  search,
  totalPages,
  isLoading,
  handleSearch,
  limitPost,
  setSkip,
  setPosts,
  currentPage,
  setCurrentPage,
  showMore,
  firstLoad,
}) => {
  return (
    <>
      <CreatePostModal />

      <Header>Posts</Header>
      {/* {!isLoading && <Loader />} */}

      <Search
        onChange={handleSearch}
        type="text"
        placeholder="Search by title or description"
      />
      <ViewSetting>
        <SelectBlock>
          {!search && (
            <>
              <Param>Show by</Param>
              <ShowBy onChange={limit}>
                {SelectPostValue.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.value}
                  </option>
                ))}
              </ShowBy>
            </>
          )}
        </SelectBlock>

        <Pagination
          total={totalPages}
          limit={limitPost}
          setSkip={setSkip}
          search={search}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </ViewSetting>

      {firstLoad ? (
        <PostsWrapper>
          {posts.map((post) => (
            <PostItem
              title={post.title}
              text={post.description}
              id={post._id}
              post={post}
              setPosts={setPosts}
              posts={posts}
              key={post._id}
              dateCreated={post.dateCreated}
              shorter={true}
            ></PostItem>
          ))}
        </PostsWrapper>
      ) : (
        <Loader />
      )}

      {posts.length === limitPost && (
        <ShowMoreBtn onClick={() => showMore()}>
          <Icons name={"ShowMorePost"} size={30} />
        </ShowMoreBtn>
      )}

      {!posts.length && isLoading ? <Header> Posts not found</Header> : ""}
      <ScrollToTopBtn />
    </>
  );
};
