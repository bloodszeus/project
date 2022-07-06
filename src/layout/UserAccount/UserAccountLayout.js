import React from "react";
import { Loader } from "../../components/Loader";
import { Header } from "../Header";
import { UserInfoItem } from "./components/UserInfoItem";
import {
  Body,
  EditLoader,
  HeaderWrapper,
  SaveBtn,
  SuccessTitle,
  UserCard,
  UserCardHeader,
  Wrapper,
} from "./style";

export const UserAccountLayout = ({
  userDataInfo,
  status,
  editUserData,
  saveBtn,
  setSave,
  userName,
  save,
  updateStatus,
}) => {
  const STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
  };

  return (
    <Wrapper>
      <Header />
      <Body>
        <h2>{`Welcome ${userName || ""}`}</h2>
        {status === STATUS.LOADING && <Loader />}
        {status === STATUS.SUCCESS && (
          <UserCard>
            <HeaderWrapper>
              {saveBtn && <SaveBtn onClick={save}>Save</SaveBtn>}
              {updateStatus === STATUS.LOADING && <EditLoader />}
              {updateStatus === STATUS.SUCCESS && (
                <SuccessTitle>Updated successfuly!</SuccessTitle>
              )}
              <UserCardHeader>Some information about you</UserCardHeader>
            </HeaderWrapper>

            {Object.entries(userDataInfo).map(([key, value]) => (
              <UserInfoItem
                name={key}
                info={value}
                key={key}
                userDataInfo={userDataInfo}
                editUserData={editUserData}
                setSave={setSave}
              />
            ))}
          </UserCard>
        )}
      </Body>
    </Wrapper>
  );
};
