import React from "react";
//Hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Redux
import { fetchUserInfo, userData } from "store/userSlice";

import { App } from "App";

export const GlobalChecks = () => {
  const user = useSelector(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user._id) dispatch(fetchUserInfo());
  }, []);

  return <App />;
};
