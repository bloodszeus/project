import { Button } from "components/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: ${(props) => (props.edit ? "2px" : "")};
  margin-left: ${(props) => (props.edit ? "40px" : "")};
  border-top: ${(props) => (props.edit ? "1px solid black" : "")};
`;

export const CommentText = styled.p`
  width: ${(props) => (props.edit ? "65%" : "70%")};
  word-wrap: break-word;
  font-size: 15px;
  margin: 1px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  height: 10px;
`;

export const ReplyBtn = styled(Button)`
  padding: 0;
  background: transparent;
  margin-right: 3px;
  margin-bottom: 2px;
`;

export const PostedBy = styled.div`
  width: 100%;
  p {
    font-size: 12px;
    margin: 0;
    span {
      font-weight: 500;
    }
  }
`;
export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  :hover {
    background: #f5f5f5;
  }
`;
