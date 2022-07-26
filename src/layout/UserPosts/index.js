import React from "react";

//Hooks
import { useContext, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Redux Store
import {
  fetchPostByUserId,
  userPosts,
  postsStatusById,
  postsErrorById,
  resetPost,
} from "../../store/UserPostSlice";
import { userData } from "../../store/userSlice";
import { fetchUserInfo } from "../../store/userSlice";

// Context
import { AuthContext } from "../../context";

// Layout
import { UserPostsLayout } from "./UserPostsLayout";

export const UserPosts = () => {
  const posts = useSelector(userPosts);
  const userId = useSelector(userData);
  const status = useSelector(postsStatusById);
  const error = useSelector(postsErrorById);
  const dispatch = useDispatch();

  const { logged } = useContext(AuthContext);

  const { user_id } = useParams();
  const navigate = useNavigate();

  const pathError = useMemo(
    () => user_id !== userId._id,
    [userId._id, user_id]
  );
  const userDataLength = useMemo(() => Object.keys(userId).length, [userId]);

  useEffect(() => {
    if (!userDataLength) dispatch(fetchUserInfo());
    if (!pathError) {
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
      posts={posts}
      error={error}
      status={status}
      userId={userId._id}
      pathError={pathError}
    />
  );
};
