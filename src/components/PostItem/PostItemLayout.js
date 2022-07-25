import { Icons } from "components/Icons";
import { LikeButton } from "components/LikeBtn";
import { formatDistance, subDays } from "date-fns";
import "react-lazy-load-image-component/src/effects/blur.css";

import React from "react";
import {
  ActionBtn,
  ActionBtnWrapper,
  Buttons,
  Img,
  Post,
  PostHeader,
  PostText,
  Time,
} from "./style";

export const PostItemLayout = ({
  img,
  handleLike,
  showPost,
  deletePost,
  editPost,
  showComments,
  ownPost,
  shorter,
  full,
  props,
}) => {
  return (
    <Post full={full}>
      <div>
        <Img
          placeholderSrc={
            "https://i.picsum.photos/id/1022/400/400.jpg?hmac=V4xBNyXzQdcn-vop4loRbXZAZb_vgZiwAdJdxjpjhEc"
          }
          effect="blur"
          src={img}
        />

        <PostHeader>
          {shorter && props.title.length > 42
            ? `${props.title.substring(0, 40)}...`
            : props.title}
        </PostHeader>
        <PostText>
          {shorter && props.text.length > 30
            ? `${props.text.substring(0, 30)}...`
            : props.text}
        </PostText>
        <PostText>{props.fullText}</PostText>
      </div>
      <Buttons>
        <LikeButton post={props.post} setLike={handleLike} />
        <ActionBtnWrapper>
          <ActionBtn onClick={() => showComments(props.id)}>
            <Icons name={"Comment"} size={25} margin={"5px auto 0px"} />
          </ActionBtn>
          {!full && (
            <ActionBtn onClick={() => showPost(props.id)}>
              <Icons name={"ShowMore"} size={40} />
            </ActionBtn>
          )}
          {ownPost && (
            <>
              <ActionBtn onClick={() => editPost(props.id)}>
                <Icons name={"EditPost"} size={25} />
              </ActionBtn>
              <ActionBtn onClick={() => deletePost(props.id)}>
                <Icons name={"DeletePost"} size={25} />
              </ActionBtn>
            </>
          )}
        </ActionBtnWrapper>
      </Buttons>
      <Time>
        {formatDistance(subDays(Date.parse(props.dateCreated), 0), Date.now(), {
          addSuffix: true,
        })}
      </Time>
    </Post>
  );
};
