import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { StyledInput, Wrapper } from "./style";

export const Input = forwardRef(
  ({ label, error, id, className, ...props }, ref) => {
    return (
      <Wrapper className={className}>
        <label htmlFor={id}>{label}</label>
        <StyledInput error={error} id={id} {...props} ref={ref} />
        <span>{error ? error : " "}</span>
      </Wrapper>
    );
  }
);

Input.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "password", "tel"]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "placeholder text",
};
