import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostApi, post, stateReset } from "store/FullPostSlice";
import { Descr, FullDescription, Line, PostWrapper, Title } from "./style";

export const PostInfo = ({ postId }) => {
  const dispatch = useDispatch();
  const postData = useSelector(post);
  const { post_id } = useParams();

  useEffect(() => {
    dispatch(getPostApi(post_id));

    return () => {
      dispatch(stateReset());
    };
  }, []);

  return (
    <PostWrapper>
      <Title>{postData[0]?.title}</Title>
      <Line />
      <Descr>{postData[0]?.description}</Descr>
      <Line />
      <FullDescription>{postData[0]?.fullText}</FullDescription>
    </PostWrapper>
  );
};
