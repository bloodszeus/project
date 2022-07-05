import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context";
import { resetUser, userData } from "../../store/userSlice";
import { HeaderLayout } from "./HeaderLayout";

export const Header = () => {
  const { logged, setLogged } = useContext(AuthContext);
  const userId = useSelector(userData);
  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(resetUser());
    localStorage.setItem("logged", "false");
    setLogged(JSON.parse(localStorage.getItem("logged")));
    localStorage.removeItem("authToken");
  };

  return <HeaderLayout logged={logged} logout={HandleLogout} id={userId._id} />;
};
