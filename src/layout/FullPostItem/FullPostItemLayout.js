import React from "react";
import { PostItem } from "components/PostItem";
import { Header } from "../Header";
import { Loader } from "components/Loader";

export const FullPostItemLayout = ({ postData, status, error }) => {
  return (
    <>
      <Header />

      {status === "succeeded" ? (
        postData.map((post) => (
          <PostItem
            key={post._id}
            title={post.title}
            text={post.description}
            dateCreated={new Date(post.dateCreated).toLocaleString()}
            fullText={post.fullText}
            id={post._id}
            post={post}
            full={true}
          />
        ))
      ) : status === "loading" ? (
        <Loader />
      ) : status === "rejected" ? (
        <h2>{error}</h2>
      ) : (
        ""
      )}
    </>
  );
};
