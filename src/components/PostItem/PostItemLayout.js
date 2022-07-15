import React from "react";
import { Buttons, Img, Post, PostHeader, PostText } from "./style";

export const PostItemLayout = ({
  fullText,
  children,
  dateCreated,
  img,
  props,
}) => {
  return (
    <Post>
      <div>
        <Img src={img} alt="img"></Img>
        <PostHeader>{props.title}</PostHeader>
        <PostText>{props.text}</PostText>
        <PostText>{fullText}</PostText>
        <p>{dateCreated}</p>
      </div>

      <Buttons>{children}</Buttons>
    </Post>
  );
};
