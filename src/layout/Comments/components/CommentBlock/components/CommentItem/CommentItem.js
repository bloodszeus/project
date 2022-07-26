import React from "react";
//Hooks
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
//Api Requests
import { getUsernameReq } from "API/api";
//Store
import { userData } from "store/userSlice";
//Components
import { Icons } from "components/Icons";
import { LikeButton } from "components/LikeBtn";
//Style
import {
  Wrapper,
  ReplyBtn,
  PostedBy,
  BtnWrapper,
  CommentText,
  CommentWrapper,
} from "./style";

export const CommentItem = ({
  text,
  edit,
  comment,
  username,
  likesItem,
  likesAction,
  replyAction,
  updateAction,
  deleteAction,
}) => {
  const user = useSelector(userData);
  const ownPost = useMemo(
    () => comment.commentedBy === user._id,
    [user._id, comment.commentedBy]
  );
  const [replayedUsername, setReplayedUsername] = useState("deleted user");
  useEffect(() => {
    const getUserName = async () => {
      const response = await getUsernameReq(comment.commentedBy);
      setReplayedUsername(response.data.name);
    };
    if (edit) getUserName();
  }, []);

  return (
    <Wrapper edit={edit}>
      <PostedBy>
        {edit ? (
          <p>
            Reply to <span>{username}</span> by <span>{replayedUsername}</span>
          </p>
        ) : (
          <p>
            Posted by <span>{username}</span>.
          </p>
        )}
      </PostedBy>
      <CommentWrapper>
        <CommentText edit={edit}>{text}</CommentText>
        <BtnWrapper>
          {ownPost && (
            <>
              <ReplyBtn onClick={deleteAction}>
                <Icons
                  name={"DeletePost"}
                  margin={"0px 4px 0px 0px"}
                  size={18}
                />
              </ReplyBtn>
              <ReplyBtn onClick={updateAction}>
                <Icons name={"EditPen"} size={14} margin={"0px 4px 0px 0px"} />
              </ReplyBtn>
            </>
          )}

          <LikeButton
            post={likesItem}
            height={17}
            width={17}
            setLike={likesAction}
          />

          <ReplyBtn onClick={replyAction}>
            <Icons name={"Reply"} size={20} margin={"0px 4px 0px 0px"} />
          </ReplyBtn>
        </BtnWrapper>
      </CommentWrapper>
    </Wrapper>
  );
};
