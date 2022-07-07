import styled from "styled-components";
import { Button } from "components/Button";

export const Body = styled.div`
  height: auto;
  padding: 20px 50px;
`;

export const CreatePostBtn = styled(Button)`
  background-color: #ff6363;
  border-radius: 5px;

  &:hover {
    background-color: #ff4a4a;
    transform: scale(1.03);
    transition: all 0.3s;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionBtn = styled(Button)`
  margin-bottom: 5px;
`;
