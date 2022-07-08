import styled from "styled-components";
import { Button } from "components/Button";

export const Btn = styled(Button)`
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
  &:hover ${Btn} {
    opacity: 1;
  }
  :hover {
    cursor: default;
    background-color: #f5f5f5;
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
