import { getUsernameReq } from "API/api";

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "store/CommentSlice";

import { CommentItem } from "./components/CommentItem/CommentItem";

import { ShowReplays, Wrapper } from "./style";

export const CommentBlock = ({
  text,
  comment,
  follow,
  setLike,
  reply,
  updateComment,
}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("deleted user");
  const [showReplays, setShowReplays] = useState(false);

  const filtered = useMemo(
    () => reply.filter((item) => item.followedCommentID === comment._id),
    [reply.length]
  );

  useEffect(() => {
    const getUserName = async () => {
      const response = await getUsernameReq(comment.commentedBy);
      setUsername(response.data.name);
    };
    getUserName();
  }, []);

  return (
    <Wrapper>
      <CommentItem
        username={username}
        text={text}
        comment={comment}
        likesItem={comment}
        deleteAction={() => dispatch(deleteComment(comment._id))}
        likesAction={setLike}
        replyAction={follow}
        updateAction={() => updateComment(text, comment._id)}
      />
      {!!filtered.length && !showReplays && (
        <ShowReplays onClick={() => setShowReplays(true)}>
          Show replays
        </ShowReplays>
      )}

      {!!filtered.length && showReplays && (
        <ShowReplays onClick={() => setShowReplays(false)}>
          Close replays
        </ShowReplays>
      )}

      {showReplays &&
        filtered.map((item) => (
          <CommentItem
            edit={true}
            key={item._id}
            username={username}
            comment={item}
            text={item.text}
            likesItem={item}
            deleteAction={() => dispatch(deleteComment(item._id))}
            likesAction={setLike}
            replyAction={follow}
            updateAction={() => updateComment(item.text, comment._id)}
          />
        ))}
    </Wrapper>
  );
};
