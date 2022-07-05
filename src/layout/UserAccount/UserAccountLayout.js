import React from "react";
import { Loader } from "../../components/Loader";
import { Header } from "../Header";
import { UserInfoItem } from "./components/UserInfoItem";
import { Body, UserCard, UserCardHeader, Wrapper } from "./style";

export const UserAccountLayout = ({ userData, status }) => {
  const STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
  };

  return (
    <Wrapper>
      <Header />
      <Body>
        <h2>{`Welcome ${userData.Login || ""}`}</h2>
        {status === STATUS.LOADING && <Loader />}
        {status === STATUS.SUCCESS && (
          <UserCard>
            <UserCardHeader>Some information about you</UserCardHeader>
            {Object.entries(userData).map(([key, value]) => (
              <UserInfoItem name={key} info={value} key={key} />
            ))}
          </UserCard>
        )}
      </Body>
    </Wrapper>
  );
};
