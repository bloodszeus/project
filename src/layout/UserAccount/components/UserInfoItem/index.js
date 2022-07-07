import React, { useState } from "react";
import { Icons } from "components/Icons";
import { EditInfo } from "../EditInfo";
import { Btn, PropName, PropValue, TitleBlock, Wrapper } from "./style";

export const UserInfoItem = ({
  name,
  info,
  editUserData,
  userDataInfo,
  setSave,
}) => {
  const disabledName = name !== "E-mail" && name !== "Created";
  const [edit, setEdit] = useState({
    [name]: "",
  });

  const [editBtn, setEditBtn] = useState(false);

  const confirm = (e) => {
    e.stopPropagation();

    setEditBtn(false);
    if (edit[name]) {
      editUserData({ ...userDataInfo, ...edit });
      setSave(true);
    }
  };

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setEdit({
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <TitleBlock>
        <PropName>{name}</PropName>
        {!editBtn && disabledName && (
          <Btn onClick={() => setEditBtn(true)}>
            <Icons name={"EditPen"} />
          </Btn>
        )}
      </TitleBlock>
      {!editBtn && disabledName && (
        <PropValue onDoubleClick={() => setEditBtn(true)}>{info}</PropValue>
      )}
      {!editBtn && !disabledName && <PropValue>{info}</PropValue>}
      {editBtn && (
        <EditInfo
          name={name}
          value={info}
          changeHandler={changeHandler}
          editBtn={editBtn}
          blur={setEditBtn}
          confirm={confirm}
          disabledName={disabledName}
          setEditBtn={setEditBtn}
        />
      )}
    </Wrapper>
  );
};
