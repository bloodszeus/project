import { Icons } from "components/Icons";
import { STATUS } from "constants/LoadStatus";
import { Header } from "layout/Header";
import React from "react";
import { CommentBlock } from "./components/CommentBlock/CommentBlock";
import { PostInfo } from "./components/PostInfo/PostInfo";
import {
  CompleteWrapper,
  Error,
  FollowID,
  InputBlock,
  LeaveBtn,
  LeaveCommentBlock,
  Textarea,
  Wrapper,
  WrapperPost,
} from "./style";

export const CommentsLayout = ({
  status,
  setComment,
  follow,
  followedId,
  deleteFollowedId,
  setLike,
  postComment,
  updateComment,
  update,
  edit,
  error,
  refText,
  replyComm,
  unreplyComm,
}) => {
  return (
    <>
      <Header />
      <WrapperPost>
        <CompleteWrapper>
          <PostInfo />
          <Wrapper>
            {status === STATUS.success &&
              unreplyComm.map((comment) => (
                <CommentBlock
                  reply={replyComm}
                  updateComment={updateComment}
                  follow={() => follow(comment._id)}
                  text={comment.text}
                  comment={comment}
                  key={comment._id}
                  setLike={setLike}
                />
              ))}
          </Wrapper>

          <LeaveCommentBlock>
            {followedId && (
              <FollowID>
                <p>
                  Reply to <span>{followedId}</span>
                </p>
                <button onClick={deleteFollowedId}>
                  <Icons name={"Cancel"} size={15} />
                </button>
              </FollowID>
            )}
            <Error>{error}</Error>
            <InputBlock>
              <Textarea ref={refText} onBlur={setComment} maxLength={80} />
              {edit ? (
                <LeaveBtn onClick={update}>Update</LeaveBtn>
              ) : (
                <LeaveBtn onClick={postComment}>Publish</LeaveBtn>
              )}
            </InputBlock>
          </LeaveCommentBlock>
        </CompleteWrapper>
      </WrapperPost>
    </>
  );
};
