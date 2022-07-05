import { useEffect } from "react";
import { HomepageLayout } from "./HomepageLayout";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../../store/userSlice";
import { AuthContext } from "../../context";
import { useContext } from "react";

export const Homepage = () => {
  const dispatch = useDispatch();
  const { logged } = useContext(AuthContext);

  useEffect(() => {
    if (logged) dispatch(fetchUserInfo());
  }, []);

  return <HomepageLayout />;
};
