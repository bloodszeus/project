import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { NewPostLayout } from "./NewPostLayout";

import { reset } from "../../store/UserPostSlice";

export const NewPost = ({
  title,
  descr,
  fullText,
  status,
  submit,
  error,
  setPostData,
}) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: title,
    description: descr,
    fullText: fullText,
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setPost({
      ...post,
      [name]: value,
    });
    dispatch(reset());
  };

  useEffect(() => {
    if (status === "succeeded") {
      formRef.current.reset();
      console.log("form");
    }
    setPostData({ ...post });
  }, [status, post]);

  return (
    <NewPostLayout
      submit={submit}
      formRef={formRef}
      post={post}
      changeHandler={changeHandler}
      status={status}
      error={error}
    />
  );
};
