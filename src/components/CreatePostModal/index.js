import React, { useContext, useEffect, useState } from "react";
// Hooks
import { useDispatch, useSelector } from "react-redux";
// Context
import { AuthContext } from "context";
// Store
import {
  fetchNewPost,
  postsError,
  postsStatus,
  reset,
} from "store/UserPostSlice";
//Layout
import { CreatePostModalLayout } from "./CreatePostModalLayout";

export const CreatePostModal = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    fullText: "",
  });
  const [showModal, setShowModal] = useState(false);
  const { logged } = useContext(AuthContext);
  const dispatch = useDispatch();
  const status = useSelector(postsStatus);
  const error = useSelector(postsError);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchNewPost(postData));
  };

  useEffect(() => {
    if (status === "succeeded") {
      setTimeout(() => {
        dispatch(reset());
        setShowModal(false);
      }, 1000);
    }
  }, [status]);

  return (
    <CreatePostModalLayout
      error={error}
      status={status}
      logged={logged}
      showModal={showModal}
      submit={submitHandler}
      getPostData={setPostData}
      setShowModal={setShowModal}
      showModalHandler={handleShowModal}
    />
  );
};
