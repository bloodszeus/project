import styled from "styled-components";
import { Button } from "../Button";
import { StyledLoader } from "../Loader/style";

export const Wrapper = styled.div`
  width: min-content;
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  width: 335px;
  height: 100px;
  resize: none;
  margin-bottom: 10px;
  padding: 7px;
  font: inherit;
  border-radius: 3px;
`;

export const Error = styled.span`
  color: red;
  text-align: center;
`;
export const Success = styled.span`
  color: green;
  text-align: center;
`;

export const BackBtn = styled(Button)`
  background-color: red;
`;

export const SmallLoader = styled(StyledLoader)`
  height: 15px;
  width: 15px;
`;

export const ConfirmBtn = styled(Button)`
  display: block;
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font: inherit;
  text-transform: uppercase;
  width: min-context;
  background: transparent;
  border: 0.7px solid #95a5a6;
  border-radius: 20px;
  transition: 0.5s all ease;

  :hover {
    background: rgba(74, 222, 128, 0.6);
    border: rgba(74, 222, 128, 0.6);
  }
`;
