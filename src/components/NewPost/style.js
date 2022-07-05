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
