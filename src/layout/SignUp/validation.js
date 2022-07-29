import * as yup from "yup";
export const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(6, "Minimum 6 symbols")
      .matches(/^((?!\s).)*$/, "Login must not contain Whitespaces"),
    email: yup
      .string()
      .required("E-mail field is required")
      .email("E-mail is not valid")
      .matches(/^((?!\s).)*$/, "Login must not contain Whitespaces"),
    password: yup
      .string()
      .required("Password is required")
      .min(5)
      .matches(/^(?=.*[0-9])/, "Must constain one digit")
      .matches(
        /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/,
        "Must constain one special symbol"
      ),
    password2: yup
      .string()
      .required("Repeat your password")
      .oneOf([yup.ref("password")], "Passwords must be the same"),
  })
  .required();
