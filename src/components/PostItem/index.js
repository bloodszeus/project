import { postImage, setLike } from "API/api";
import React, { useEffect, useState } from "react";
import { PostItemLayout } from "./PostItemLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById } from "store/UserPostSlice";
import { userData } from "store/userSlice";

export const PostItem = ({ setPosts, posts, shorter, full, ...props }) => {
  const [link, setLink] = useState("");
  const [ownPost, setOwnPost] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userData);

  useEffect(() => {
    if (props.post.postedBy === user._id) {
      setOwnPost(true);
    }
    imgs();
  }, []);

  const arr = [];
  const imgs = async () => {
    const response = await postImage();
    arr.push(response.url);
    setLink(...arr);
  };

  const LikeHandler = async (postId) => await setLike(postId);
  const showPostHandler = (postId) => navigate(`/posts/post/${postId}`);
  const editPostHandler = (postId) => navigate(`/posts/post/${postId}/editing`);
  const deletePostHandler = (id) => {
    dispatch(deletePostById(id));
  };

  return (
    <PostItemLayout
      full={full}
      shorter={shorter}
      ownPost={ownPost}
      editPost={editPostHandler}
      deletePost={deletePostHandler}
      showPost={showPostHandler}
      handleLike={LikeHandler}
      img={link}
      props={{ ...props }}
    />
  );
};
