import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context";
import {
  fetchNewPost,
  postsError,
  postsStatus,
  reset,
} from "../../store/UserPostSlice";
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
        handleShowModal();
      }, 1000);
    }
  }, [status]);

  return (
    <CreatePostModalLayout
      status={status}
      error={error}
      submit={submitHandler}
      getPostData={setPostData}
      showModalHandler={handleShowModal}
      logged={logged}
      setShowModal={setShowModal}
      showModal={showModal}
    />
  );
};
