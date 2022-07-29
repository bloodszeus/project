import React from "react";
//Hooks
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//Api Requests
import { SignUpValidApi } from "API/api";
//Constants
import { schema } from "./validation";
//Layout
import { SignUpLayout } from "./SignUpLayout";

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onPageChangeHandler = () => {
    navigate("/user-valid/sign-in");
  };

  const onSubmit = async (data) => {
    const { email, name, password } = data;
    const response = await SignUpValidApi({
      email,
      name,
      password,
    });

    if (response?.data?.error) {
      setError("email", {
        type: "custom",
        message: response.data?.error,
      });
    } else {
      reset();
      setTimeout(() => {
        navigate("/user-valid/sign-in");
      }, 3000);
    }
  };

  return (
    <SignUpLayout
      errors={errors}
      register={register}
      isValid={isSubmitSuccessful}
      submit={handleSubmit(onSubmit)}
      pageChange={onPageChangeHandler}
    />
  );
};
