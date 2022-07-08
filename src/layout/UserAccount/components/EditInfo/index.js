import React from "react";
import { Icons } from "components/Icons";
import { Btn } from "../UserInfoItem/style";
import { StyledInput, Wrapper } from "./style";

export const EditInfo = ({
  name,
  value,
  changeHandler,
  blur,
  confirm,
  setEditBtn,
  disabledName,
}) => {
  return (
    <Wrapper>
      <StyledInput
        type="text"
        autoFocus
        name={name}
        defaultValue={value}
        onBlur={() => blur(false)}
        onChange={changeHandler}
      />
      <Btn onMouseDown={confirm}>
        <Icons name={"Confirm"} size={20} />
      </Btn>
      {disabledName && (
        <Btn onClick={() => setEditBtn(false)}>
          <Icons name={"Cancel"} />
        </Btn>
      )}
    </Wrapper>
  );
};
