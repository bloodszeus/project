import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, className, ...props }) => {
  return <StyledButton {...{ className, ...props }}>{children}</StyledButton>;
};
