import { postImage } from "API/api";
import React, { useEffect, useState } from "react";
import { PostItemLayout } from "./PostItemLayout";

export const PostItem = ({ fullText, children, dateCreated, ...props }) => {
  const [link, setLink] = useState([]);
  const arr = [];
  const imgs = async () => {
    const response = await postImage();
    arr.push(response.url);
    setLink(...arr);
  };

  useEffect(() => {
    imgs();
  }, []);

  return (
    <PostItemLayout
      img={link}
      fullText={fullText}
      children={children}
      dateCreated={dateCreated}
      props={{ ...props }}
    />
  );
};
