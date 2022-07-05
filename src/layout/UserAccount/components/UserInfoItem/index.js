import React from "react";
import { PropName, PropValue } from "./style";

export const UserInfoItem = ({ name, info }) => {
  return (
    <PropName>
      {`${name}: `}
      <PropValue>{info}</PropValue>
    </PropName>
  );
};
