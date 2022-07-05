import { SignUpValidApi } from "../../API/api";

export const validate = async (form) => {
  let error = {};

  const { login, email, pass, pass2 } = form;

  //   Login check
  if (login.length === 0 || login.length < 6) {
    error.login = "Login minlenght is 6 symbols";
  } else if (/^(?=.*\s)/.test(login)) {
    error.login = "Login must not contain Whitespaces";
  }

  // E-mail check
  if (email.length === 0) {
    error.email = "Email cannot be blank";

    // eslint-disable-next-line no-useless-escape
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    error.email = "Email is not valid!";
  }

  //   Pass check
  if (pass.length === 0 || pass.length < 5) {
    error.pass = "Password length must be at least 5 characters long";
  } else if (/^(?=.*\s)/.test(pass)) {
    error.pass = "Password must not contain Whitespaces";
  }
  // else if (
  //   !/^(?=.*[A-Z])/.test(pass) ||
  //   !/^(?=.*[0-9])/.test(pass) ||
  //   !/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/.test(pass) ||
  //   !/^.{10,16}$/.test(pass)
  // ) {
  //   error.pass =
  //     "Password must contain at least one uppercase, one number, special symbol";
  // }

  if (pass2 !== pass) {
    error.pass2 = "Passwords not match";
  }

  if (!error.login && !error.email && !error.pass && !error.pass2) {
    const response = await SignUpValidApi({
      email,
      name: login,
      password: pass,
    });

    if (response?.data?.error === "Email must be uniq") {
      error.email = "Email already in use!";
      console.log("Error");
    }
  }
  return { error };
};
