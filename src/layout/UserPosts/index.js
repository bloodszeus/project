import { useContext, useEffect } from "react";
import { UserPostsLayout } from "./UserPostsLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  deletePostById,
  fetchPostByUserId,
  userPosts,
  postsStatusById,
  postsErrorById,
  resetPost,
} from "../../store/UserPostSlice";
import { userData } from "../../store/userSlice";
import { fetchUserInfo } from "../../store/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context";
import { setLike } from "../../API/api";

export const UserPosts = () => {
  const posts = useSelector(userPosts);
  const userId = useSelector(userData);
  const status = useSelector(postsStatusById);
  const error = useSelector(postsErrorById);
  const dispatch = useDispatch();

  const { logged } = useContext(AuthContext);

  const { user_id } = useParams();
  const navigate = useNavigate();

  const pathError = user_id === userId._id;
  const userDataLength = Object.keys(userId).length;

  const deletePost = (id) => dispatch(deletePostById(id));
  const setLikeHandler = async (postId) => await setLike(postId);

  const showPostHandler = (postId) => navigate(`/posts/post/${postId}`);
  const editPostHandler = (postId) => navigate(`/posts/post/${postId}/editing`);

  useEffect(() => {
    if (!userDataLength) dispatch(fetchUserInfo());
    if (pathError) {
      dispatch(resetPost());
      dispatch(fetchPostByUserId(user_id));
    }
    if (!userDataLength && !logged) navigate("/home");

    return () => {
      dispatch(resetPost());
    };
  }, [userDataLength, logged, pathError]);

  return (
    <UserPostsLayout
      editPost={editPostHandler}
      setLike={setLikeHandler}
      userId={userId._id}
      showPost={showPostHandler}
      pathError={pathError}
      status={status}
      error={error}
      deletePost={deletePost}
      posts={posts}
    />
  );
};
