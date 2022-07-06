import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context";
import {
  fetchUserInfo,
  resetStatus,
  updatedUserDataStatus,
  updateUserInfo,
  userData,
  userDataStatus,
} from "../../store/userSlice";
import { UserAccountLayout } from "./UserAccountLayout";

export const UserAccount = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userData);
  const status = useSelector(userDataStatus);
  const updateStatus = useSelector(updatedUserDataStatus);
  const { user_id } = useParams();
  const { logged } = useContext(AuthContext);
  const navigate = useNavigate();

  const [saveBtn, setSaveBtn] = useState(false);
  const [userDataInfo, setUserDataInfo] = useState({
    Login: "",
    "E-mail": "",
    Details: "",
    "Extra detail": "",
    Profession: "",
    Skills: "",
    Created: "",
  });

  useEffect(() => {
    if (!Object.keys(userInfo).length) dispatch(fetchUserInfo());
    setUserDataInfo({
      Login: userInfo.name || "",
      "E-mail": userInfo.email,
      Details: userInfo.details || "",
      "Extra detail": userInfo.extra_details || "",
      Profession: userInfo.profession || "",
      Skills: userInfo.skills || "",
      Created: new Date(userInfo.dateCreated).toLocaleString(),
    });
    if (!logged) navigate("/home");

    return () => {
      dispatch(resetStatus());
    };
  }, [userInfo, logged]);

  const newInfoHandler = () => {
    dispatch(
      updateUserInfo({
        userId: user_id,
        name: userDataInfo.Login,
        extra_details: userDataInfo["Extra detail"],
        skills: userDataInfo.Skills,
        profession: userDataInfo.Profession,
        details: userDataInfo.Details,
      })
    );
    setSaveBtn(false);
  };

  return (
    <UserAccountLayout
      userName={userInfo.name}
      userDataInfo={userDataInfo}
      editUserData={setUserDataInfo}
      status={status}
      setSave={setSaveBtn}
      saveBtn={saveBtn}
      save={newInfoHandler}
      updateStatus={updateStatus}
    />
  );
};
