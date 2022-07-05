import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, className, ...props }) => {
  // const variant = {
  //   primary: {

  //   },
  //   secondary: {

  //   }
  // }

  return <StyledButton {...{ className, ...props }}>{children}</StyledButton>;
};
