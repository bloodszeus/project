import React from "react";
import { Header } from "../Header";
import { PostList } from "../PostList";

import { Body } from "./styles";

export const HomepageLayout = () => {
  return (
    <>
      <Header />
      <Body>
        <PostList />
      </Body>
    </>
  );
};
