import React from "react";
import { StyledInput, Wrapper } from "./style";

export const Input = ({
  validColor,
  label,
  error,
  id,
  className,
  ...props
}) => {
  return (
    <Wrapper className={className}>
      <label htmlFor={id}>{label}</label>
      <StyledInput {...{ error, id, ...props }}></StyledInput>
      <span>{error ? error : " "}</span>
    </Wrapper>
  );
};
