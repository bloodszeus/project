import React from "react";
//Components
import { CreatePostModal } from "components/CreatePostModal";
import { Loader } from "components/Loader";
import { PostItem } from "components/PostItem";
import { Header } from "../Header";

//Style
import { Body, PostsWrapper } from "./style";

export const UserPostsLayout = ({ posts, status, pathError }) => {
  return (
    <>
      <Header />
      <Body>
        <CreatePostModal />

        {status === "succeeded" ? (
          <PostsWrapper>
            {posts.map((post) => (
              <PostItem
                title={post.title}
                text={post.description}
                id={post._id}
                post={post}
                posts={posts}
                key={post._id}
                dateCreated={post.dateCreated}
                shorter={true}
              />
            ))}
          </PostsWrapper>
        ) : status === "loading" ? (
          <Loader />
        ) : null}

        {pathError && <h2>Path error</h2>}

        {!posts.length && status === "succeeded" && <h2>Posts not found</h2>}
      </Body>
    </>
  );
};
