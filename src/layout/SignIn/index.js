import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context";
import { useValid } from "hooks/useValid";
import { SignInLayout } from "./SignInLayout";
import { validate } from "./validate";
import { SignInApi } from "API/api";

export const SignIn = () => {
  const { setLogged } = useContext(AuthContext);
  const form = {
    email: "",
    password: "",
  };

  let navigate = useNavigate();

  const { onChangeHandler, onBlurHandler, onSubmitHandle, error } = useValid({
    submit,
    validate,
    formState: form,
  });

  async function submit() {
    const response = await SignInApi();
    if (response.data?.error || !response?.data) {
      return;
    }

    localStorage.setItem("logged", "true");
    setLogged(JSON.parse(localStorage.getItem("logged")));
    navigate("/home");
  }

  const onPageChangeHandler = () => {
    navigate("/user-valid/sign-up");
  };

  return (
    <SignInLayout
      error={error}
      onBlur={onBlurHandler}
      onSubmit={onSubmitHandle}
      onChange={onChangeHandler}
      onPageChange={onPageChangeHandler}
    />
  );
};
