import React from "react";
import { Buttons, Post } from "./style";

export const PostItemLayout = ({ fullText, children, dateCreated, props }) => {
  return (
    <Post>
      <div>
        <span>{`${props.index}. `}</span>
        <strong>{props.title}</strong>
        <p>{props.text}</p>
        <p>{fullText}</p>
        <p>{dateCreated}</p>
      </div>
      <Buttons>{children}</Buttons>
    </Post>
  );
};
