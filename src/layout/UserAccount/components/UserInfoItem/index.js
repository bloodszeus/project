import React, { useMemo, useState } from "react";
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
  const [editBtn, setEditBtn] = useState(false);

  const disabledName = useMemo(
    () => name !== "E-mail" && name !== "Created",
    [name]
  );
  const editPossibility = useMemo(
    () => !editBtn && disabledName,
    [editBtn, disabledName]
  );

  const [edit, setEdit] = useState({
    [name]: "",
  });

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
        {editPossibility && (
          <Btn onClick={() => setEditBtn(true)}>
            <Icons name={"EditPen"} />
          </Btn>
        )}
      </TitleBlock>
      {editPossibility && (
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
