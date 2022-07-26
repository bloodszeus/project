import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./style";

export const Button = ({ children, className, color, ...props }) => {
  return (
    <StyledButton className={className} color={color} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  color: "primary",
  type: "button",
};
