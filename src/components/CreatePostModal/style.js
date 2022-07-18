import styled from "styled-components";
import { Button } from "../Button";

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CreatePostBtn = styled(Button)`
  background-color: #7f8c8d;
  border-radius: 10px;
  color: #ecf0f1;
  transition: all 0.3s linear;
  &:hover {
    background-color: #bdc3c7;
    color: black;
    transform: scale(1.03);
  }
`;
