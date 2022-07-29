import React, { useContext, useEffect } from "react";
//Hooks
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//Api Requests
import { SignInApi, SignInValidApi } from "API/api";
//Context
import { AuthContext } from "context";
//Libs
import { yupResolver } from "@hookform/resolvers/yup";
//Validation
import { schema } from "./validate";
//Layout
import { SignInLayout } from "./SignInLayout";

export const SignIn = () => {
  const { setLogged } = useContext(AuthContext);
  let navigate = useNavigate();

  const form = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
      getUser();
      localStorage.setItem("logged", "true");
      setLogged(JSON.parse(localStorage.getItem("logged")));
      navigate("/home");
    }
  }, [form.formState.isSubmitSuccessful]);

  const submit = async (data) => {
    const response = await SignInValidApi(data);
    if (response.status !== 200)
      form.setError("email", {
        type: "custom",
        message: "Invalid E-mail or password",
      });
  };

  const getUser = async () => await SignInApi();

  const onPageChangeHandler = () => {
    navigate("/user-valid/sign-up");
  };

  return (
    <SignInLayout
      form={form}
      submit={form.handleSubmit(submit)}
      onPageChange={onPageChangeHandler}
    />
  );
};
