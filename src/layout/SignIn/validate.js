import { SignInValidApi } from "../../API/api";

export const validate = async (form) => {
  let error = {};

  const { email, password } = form;

  if (email.length === 0) {
    error.email = "Login is required";
  }
  if (password.length === 0) {
    error.password = "Password is required";
  }

  if (!error.login && !error.email) {
    const response = await SignInValidApi(email, password);

    if (!response?.data) {
      error.email = "Something went wrong";
    }

    if (response?.data?.error) {
      const errorMass = response.data.error[0].message;
      const errorKey = response.data.error[0].context?.key;

      if (errorKey === "email") error.email = errorMass;

      if (errorKey === "password") error.password = errorMass;

      if (response.status === 404) error.email = "Invalid e-mail or password";
    }
  }

  return { error };
};
