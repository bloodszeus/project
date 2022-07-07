import React from "react";
import { LikeButton } from "components/LikeBtn";
import { PostItem } from "components/PostItem";
import { ActionBtn } from "../style";

export const UserPosts = ({
  post,
  index,
  showPost,
  deletePost,
  editPost,
  setLike,
  userId,
}) => {
  return (
    <PostItem
      title={post.title}
      text={post.description}
      index={index + 1}
      id={post._id}
      dateCreated={new Date(post.dateCreated).toLocaleString()}
    >
      <ActionBtn onClick={() => showPost(post._id)}>Show More</ActionBtn>
      <ActionBtn onClick={() => editPost(post._id)}>Edit</ActionBtn>
      <ActionBtn onClick={() => deletePost(post._id)}>Delete</ActionBtn>
      <LikeButton post={post} userId={userId} setLike={setLike} />
    </PostItem>
  );
};
