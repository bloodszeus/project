import React from "react";
//Hooks
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Store
import {
  getComments,
  postComment,
  resetComment,
  commenstData,
  likeToComment,
  commentsStatus,
  upadateCommentText,
} from "store/CommentSlice";

//Layout
import { CommentsLayout } from "./CommentsLayout";

export const Comments = () => {
  const status = useSelector(commentsStatus);
  const comments = useSelector(commenstData);
  const dispatch = useDispatch();
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

  return (
    <CommentsLayout
      edit={edit}
      error={error}
      status={status}
      refText={refText}
      replyComm={replyComm}
      setLike={LikeHandler}
      unreplyComm={unreplyComm}
      commentText={comment.text}
      setComment={commentHandler}
      update={confirmUpdateHandler}
      follow={followedCommentHandler}
      postComment={postCommentHandler}
      updateComment={updateTextHandler}
      followedId={comment.followedCommentID}
      deleteFollowedId={deleteFollowedIdHandler}
    />
  );
};
