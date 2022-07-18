import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { NewPostLayout } from "./NewPostLayout";

import { reset } from "../../store/UserPostSlice";
import { useNavigate } from "react-router-dom";

export const NewPost = ({
  title,
  descr,
  fullText,
  status,
  submit,
  error,
  edit,
  setPostData,
  confirmText,
}) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: title,
    description: descr,
    fullText: fullText,
  });
  const navigate = useNavigate();

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });
    dispatch(reset());
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  useEffect(() => () => dispatch(reset()), []);

  useEffect(() => {
    if (status === "succeeded") {
      formRef.current.reset();
    }
    setPostData({ ...post });
  }, [status, post]);

  return (
    <NewPostLayout
      confirmText={confirmText}
      goBack={goBackHandler}
      edit={edit}
      submit={submit}
      formRef={formRef}
      post={post}
      changeHandler={changeHandler}
      status={status}
      error={error}
    />
  );
};
