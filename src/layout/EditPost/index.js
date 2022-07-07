import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  reset,
  editError,
  editStatus,
  updatePostById,
} from "store/UserPostSlice";
import {
  getPostApi,
  post,
  postStatus,
  statusReset,
  stateReset,
} from "store/FullPostSlice";

import { EditPostLayout } from "./EditPostLayout";

export const EditPost = () => {
  const dispatch = useDispatch();
  const { post_id } = useParams();
  const postData = useSelector(post);
  const status = useSelector(postStatus);
  const editingStatus = useSelector(editStatus);
  const editingError = useSelector(editError);

  const [updatedPost, setUpdetedPost] = useState({
    title: "",
    description: "",
    fullText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updatePostById({
        postId: post_id,
        ...updatedPost,
      })
    );
  };

  useEffect(() => {
    dispatch(getPostApi(post_id));

    return () => {
      dispatch(reset());
      dispatch(stateReset());
      dispatch(statusReset());
    };
  }, []);

  return (
    <EditPostLayout
      error={editingError}
      submit={handleSubmit}
      getUpdatedData={setUpdetedPost}
      postData={postData[0]}
      status={status}
      editStatus={editingStatus}
    />
  );
};
