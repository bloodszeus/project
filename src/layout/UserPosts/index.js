import { useContext, useEffect } from "react";
import { UserPostsLayout } from "./UserPostsLayout";
import { useSelector, useDispatch } from "react-redux";
import {
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
      userId={userId._id}
      pathError={pathError}
      status={status}
      error={error}
      posts={posts}
    />
  );
};
