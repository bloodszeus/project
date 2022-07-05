import React from "react";
import { PostItemLayout } from "./PostItemLayout";

export const PostItem = ({ fullText, children, dateCreated, ...props }) => {
  return (
    <PostItemLayout
      fullText={fullText}
      children={children}
      dateCreated={dateCreated}
      props={{ ...props }}
    />
  );
};
