import React from "react";
import PropTypes from "prop-types";
import { StyledInput, Wrapper } from "./style";

export const Input = ({ label, error, id, className, ...props }) => {
  return (
    <Wrapper className={className}>
      <label htmlFor={id}>{label}</label>
      <StyledInput error={error} id={id} {...props}></StyledInput>
      <span>{error ? error : " "}</span>
    </Wrapper>
  );
};

Input.propTypes = {
  inputType: PropTypes.oneOfType(["text", "number"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  inputType: "text",
  placeholder: "placeholder text",
};
