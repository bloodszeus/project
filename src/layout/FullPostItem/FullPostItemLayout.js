import React from "react";
import { PostItem } from "../../components/PostItem";
import { Header } from "../Header";
import { Loader } from "../../components/Loader";

export const FullPostItemLayout = ({ postData, status, error }) => {
  return (
    <>
      <Header />

      {status === "succeeded" ? (
        postData.map((post, index) => (
          <PostItem
            key={index}
            index={index + 1}
            title={post.title}
            text={post.description}
            dateCreated={new Date(post.dateCreated).toLocaleString()}
            fullText={post.fullText}
            id={post._id}
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
