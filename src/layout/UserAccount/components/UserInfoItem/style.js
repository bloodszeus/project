import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { ReactComponent as EditSvg } from "./edit_pen.svg";
import { ReactComponent as CancelSvg } from "./cancel.svg";
import { ReactComponent as ConfirmSvg } from "./confirm.svg";

export const SvgBtn = styled(Button)`
  opacity: 0;
  display: flex;
  align-items: center;
  background-color: transparent;

  margin: 5px;
  padding: 0;
`;

export const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  margin: 5px 0px;
  padding: 5px;
  &:hover ${SvgBtn} {
    opacity: 1;
  }
  :hover {
    background-color: lightgray;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PropName = styled.p`
  font-weight: 500;
  margin: 0px 5px 5px 0px;
`;

export const PropValue = styled.p`
  font-weight: normal;
  word-break: break-word;
  margin: 0;
`;

export const EditBtn = styled(EditSvg)`
  height: 15px;
  width: 15px;
`;
export const CancelBtn = styled(CancelSvg)`
  height: 15px;
  width: 15px;
`;
export const ConfirmBtn = styled(ConfirmSvg)`
  height: 20px;
  width: 20px;
`;
