import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LikeButton } from "components/LikeBtn";
import { PostItem } from "components/PostItem";
import { userData } from "store/userSlice";
import { ActionBtn } from "./style";

export const Posts = ({ item, setLike, showPost, deletePost, editPost }) => {
  const [ownPost, setOwnPost] = useState(false);
  const user = useSelector(userData);

  useEffect(() => {
    if (item.postedBy === user._id) {
      setOwnPost(true);
    }
  }, []);

  return (
    <PostItem title={item.title} text={item.description} id={item._id}>
      {ownPost && (
        <>
          <ActionBtn onClick={() => deletePost(item._id)}>Delete</ActionBtn>
          <ActionBtn onClick={() => editPost(item._id)}>Edit Post</ActionBtn>
        </>
      )}
      <ActionBtn onClick={() => showPost(item._id)}>Show More</ActionBtn>

      <LikeButton post={item} setLike={setLike} />
    </PostItem>
  );
};
