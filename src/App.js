import { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "GlobalStyle";
import { SignUp } from "layout/SignUp";
import { SignIn } from "layout/SignIn";
import { Homepage } from "layout/Homepage";
import { AuthContext } from "context";
import { UserPosts } from "layout/UserPosts";
import { FullPostItem } from "layout/FullPostItem";
import { EditPost } from "layout/EditPost";
import { UserAccount } from "layout/UserAccount";
import { Comments } from "layout/Comments";

export const App = () => {
  const location = useLocation();
  const [logged, setLogged] = useState(
    JSON.parse(localStorage.getItem("logged"))
  );

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="*" element={<Homepage />} />
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="user-valid/sign-in" element={<SignIn />} />
          <Route path="user-valid/sign-up" element={<SignUp />} />
          <Route path="posts/:user_id" element={<UserPosts />} />
          <Route path="posts/post/:post_id" element={<FullPostItem />} />
          <Route path="posts/post/:post_id/comments" element={<Comments />} />
          <Route path="posts/post/:post_id/editing" element={<EditPost />} />
          <Route path="users/:user_id" element={<UserAccount />} />
        </Routes>
      </AnimatePresence>
    </AuthContext.Provider>
  );
};
