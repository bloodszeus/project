import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { fetchUserInfo, userData, userDataStatus } from "../../store/userSlice";
import { UserAccountLayout } from "./UserAccountLayout";

export const UserAccount = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userData);
  const status = useSelector(userDataStatus);

  useEffect(() => {
    if (!Object.keys(userInfo).length) dispatch(fetchUserInfo());
  }, [userInfo]);

  const userDataInfo = {
    Login: userInfo.name,
    "E-mail": userInfo.email,
    ID: userInfo._id,
    Details: userInfo.details || "",
    "Extra detail": userInfo.details || "",
    Profession: userInfo.details || "",
    Skills: userInfo.details || "",
    Created: new Date(userInfo.dateCreated).toLocaleString(),
  };

  return <UserAccountLayout userData={userDataInfo} status={status} />;
};
