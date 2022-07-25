import { getUsernameReq, postImage, setLike } from "API/api";
import React, { useContext, useEffect, useState } from "react";
import { PostItemLayout } from "./PostItemLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById } from "store/UserPostSlice";
import { userData } from "store/userSlice";
import { AuthContext } from "context";

export const PostItem = ({ setPosts, posts, shorter, full, ...props }) => {
  const [link, setLink] = useState("");
  const [ownPost, setOwnPost] = useState(false);
  const [author, setAuthor] = useState("...");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(userData);
  const { logged } = useContext(AuthContext);

  useEffect(() => {
    if (props.post.postedBy === user._id) setOwnPost(true);

    if (full && props.post.postedBy) getAuthor();
    else setAuthor("deleted user");

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
  const showComments = (postId) => navigate(`/posts/post/${postId}/comments`);
  const deletePostHandler = (id) => {
    dispatch(deletePostById(id));
  };

  const getAuthor = async () => {
    const response = await getUsernameReq(props.post.postedBy);
    setAuthor(response.data.name);
  };

  return (
    <PostItemLayout
      showComments={showComments}
      full={full}
      logged={logged}
      author={author}
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
