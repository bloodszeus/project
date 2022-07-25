import { configureStore } from "@reduxjs/toolkit";
import userPostReducer from "store/UserPostSlice";
import userInfo from "store/userSlice";
import postById from "store/FullPostSlice";
import allPosts from "./AllPostSlice";
import postComments from "./CommentSlice";

export const store = configureStore({
  reducer: {
    userPosts: userPostReducer,
    userInfo: userInfo,
    postById: postById,
    allPosts: allPosts,
    comments: postComments,
  },
});
