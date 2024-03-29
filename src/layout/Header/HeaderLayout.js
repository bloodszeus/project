import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HeaderRightSide, Header, LeftSide, SignUpBtn, Logout } from "./style";

import logo from "./logo.svg";
import { Button } from "components/Button";
import { Icons } from "components/Icons";

export const HeaderLayout = ({ logged, logout, id }) => {
  return (
    <Header>
      <HeaderRightSide>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <NavLink to={"/home"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={`/users/${id}`}>
              {logged && <li>My account</li>}
            </NavLink>
            <NavLink to={`/posts/${id}`}>{logged && <li>My Posts</li>}</NavLink>
          </ul>
        </nav>
      </HeaderRightSide>
      <LeftSide>
        {logged ? (
          <Logout onClick={logout}>
            <Icons name={"Logout"} size={30} />
          </Logout>
        ) : (
          <>
            <Link to={"/user-valid/sign-up"}>
              <SignUpBtn>Sign Up</SignUpBtn>
            </Link>
            <Link to={"/user-valid/sign-in"}>Already have account ?</Link>
          </>
        )}
      </LeftSide>
    </Header>
  );
};
