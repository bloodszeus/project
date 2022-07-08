import React, { createElement } from "react";
import * as icons from "icons";
import { IconWrapper } from "./style";

export const Icons = ({ name, size, className, margin }) => {
  const svg = icons[name];

  return (
    <>
      {svg ? (
        <IconWrapper size={size} className={className} margin={margin}>
          {createElement(svg)}
        </IconWrapper>
      ) : null}
    </>
  );
};
