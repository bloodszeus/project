import React from "react";
//Components
import { Header } from "layout/Header";
import { Icons } from "components/Icons";
import { PostInfo } from "./components/PostInfo/PostInfo";
import { CommentBlock } from "./components/CommentBlock/CommentBlock";
//Constants
import { STATUS } from "constants/LoadStatus";
//Styles
import {
  Error,
  Wrapper,
  LeaveBtn,
  Textarea,
  FollowID,
  InputBlock,
  WrapperPost,
  CompleteWrapper,
  LeaveCommentBlock,
} from "./style";

export const CommentsLayout = ({
  edit,
  error,
  status,
  follow,
  update,
  refText,
  setLike,
  replyComm,
  setComment,
  followedId,
  postComment,
  unreplyComm,
  updateComment,
  deleteFollowedId,
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
