import React from "react";
import { useNavigate } from "react-router-dom";
import { useValid } from "../../hooks/useValid";
import { validate } from "./validate";
import { SignUpLayout } from "./SignUpLayout";

export const SignUp = () => {
  const formState = {
    login: "",
    email: "",
    pass: "",
    pass2: "",
  };

  let navigate = useNavigate();

  const submit = () => {
    setTimeout(() => {
      navigate("/user-valid/sign-in");
    }, 3000);
  };

  const {
    onChangeHandler,
    onBlurHandler,
    onSubmitHandle,
    validColors,
    error,
    isValid,
  } = useValid({ submit, validate, formState });

  const onPageChangeHandler = () => {
    navigate("/user-valid/sign-in");
  };

  return (
    <SignUpLayout
      validColors={validColors}
      onBlur={onBlurHandler}
      error={error}
      onSubmit={onSubmitHandle}
      onChange={onChangeHandler}
      onPageChange={onPageChangeHandler}
      isValid={isValid}
    />
  );
};
