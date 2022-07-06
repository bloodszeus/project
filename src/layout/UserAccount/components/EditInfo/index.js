import React from "react";
import { CancelBtn, ConfirmBtn, SvgBtn } from "../UserInfoItem/style";
import { StyledInput, Wrapper } from "./style";

export const EditInfo = ({
  name,
  value,
  changeHandler,
  blur,
  confirm,
  editBtn,
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
      <SvgBtn onMouseDown={confirm}>
        <ConfirmBtn />
      </SvgBtn>
      {disabledName && (
        <SvgBtn onClick={() => setEditBtn(false)}>
          <CancelBtn />
        </SvgBtn>
      )}
    </Wrapper>
  );
};
