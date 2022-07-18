import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPostApi,
  post,
  postError,
  postStatus,
  stateReset,
  statusReset,
} from "store/FullPostSlice";
import { FullPostItemLayout } from "./FullPostItemLayout";

export const FullPostItem = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(post);
  const status = useSelector(postStatus);
  const error = useSelector(postError);

  useEffect(() => {
    dispatch(getPostApi(post_id));

    return () => {
      dispatch(statusReset());
      dispatch(stateReset());
    };
  }, []);

  console.log(postData);

  return (
    <FullPostItemLayout postData={postData} status={status} error={error} />
  );
};
