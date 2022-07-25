import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  commenstData,
  commentsStatus,
  getComments,
  likeToComment,
  postComment,
  resetComment,
  upadateCommentText,
} from "store/CommentSlice";
import { CommentsLayout } from "./CommentsLayout";

export const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(commenstData);
  const status = useSelector(commentsStatus);
  const { post_id } = useParams();
  const refText = useRef("");

  const [comment, setComment] = useState({
    text: "",
    followedCommentID: null,
  });
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const [commentId, setCommentId] = useState("");

  useEffect(() => {
    dispatch(getComments(post_id));
    return () => {
      dispatch(resetComment());
    };
  }, []);

  const commentHandler = () => {
    setComment({ ...comment, text: refText.current.value });
  };

  const followedCommentHandler = (id) =>
    setComment({ ...comment, followedCommentID: id });

  const deleteFollowedIdHandler = () =>
    setComment({ ...comment, followedCommentID: "" });

  const LikeHandler = (commentId) => dispatch(likeToComment(commentId));

  const postCommentHandler = () => {
    if (comment.text.length < 3) {
      setError("Comment length must be at least 3 characters long");
    } else {
      dispatch(postComment({ post_id, ...comment }));
      setComment({ text: "", followedCommentID: null });
      setError("");
      refText.current.value = "";
    }
  };

  const updateTextHandler = (commentText, commentId) => {
    refText.current.value = commentText;
    setCommentId(commentId);
    setEdit(true);
  };

  const confirmUpdateHandler = () => {
    dispatch(upadateCommentText({ commentId, text: comment.text }));
    setEdit(false);
    setCommentId("");
    setComment({ text: "", followedCommentID: null });
    refText.current.value = "";
  };
  const replyComm = useMemo(
    () => comments.filter((item) => item.followedCommentID !== null),
    [comments]
  );
  const unreplyComm = useMemo(
    () => comments.filter((item) => item.followedCommentID === null),
    [comments]
  );
  console.log(status);

  return (
    <CommentsLayout
      status={status}
      replyComm={replyComm}
      unreplyComm={unreplyComm}
      refText={refText}
      edit={edit}
      error={error}
      followedId={comment.followedCommentID}
      update={confirmUpdateHandler}
      updateComment={updateTextHandler}
      setLike={LikeHandler}
      commentText={comment.text}
      postComment={postCommentHandler}
      deleteFollowedId={deleteFollowedIdHandler}
      setComment={commentHandler}
      follow={followedCommentHandler}
    />
  );
};
