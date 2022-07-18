import React from "react";
import { Loader } from "components/Loader";
import { Header } from "../Header";
import { UserInfoItem } from "./components/UserInfoItem";
import {
  Avatar,
  Body,
  EditLoader,
  HeaderWrapper,
  ResetBtn,
  SaveBtn,
  SuccessTitle,
  UserCard,
  UserCardHeader,
  Wrapper,
} from "./style";
import { Icons } from "components/Icons";

export const UserAccountLayout = ({
  userDataInfo,
  status,
  editUserData,
  saveBtn,
  setSave,
  userName,
  save,
  updateStatus,
  reset,
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
        <Avatar
          src="https://i.picsum.photos/id/768/200/200.jpg?hmac=CZCVsqJECKhkvl5gzeCA0O5iSMmRn_RVFzVrREOE7ws"
          alt="Avatar"
        />
        {status === STATUS.LOADING && <Loader />}
        {status === STATUS.SUCCESS && (
          <UserCard>
            <HeaderWrapper>
              {saveBtn && <SaveBtn onClick={save}>Save</SaveBtn>}
              {saveBtn && (
                <ResetBtn onClick={reset}>
                  <Icons name={"Reset"} size={25} />
                </ResetBtn>
              )}
              {updateStatus === STATUS.LOADING && (
                <EditLoader name={"Loader"} size={30} />
              )}
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
