import { Button } from "components/Button";
import styled from "styled-components";

export const WrapperPost = styled.div`
  overflow: hidden;
`;

export const CompleteWrapper = styled.div`
  display: flex;

  height: calc(100vh - 70px);
  padding-bottom: 5px;
  flex-direction: column;
  align-content: stretch;
`;

export const Wrapper = styled.div`
  position: relative;

  width: 25%;
  margin: 0 auto;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  border-bottom: 1px solid black;

  ::-webkit-scrollbar {
    width: 3px;
    opacity: 0;
  }
  :hover {
    overflow-y: auto;

    ::-webkit-scrollbar {
      opacity: 1;
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;
      border-radius: 20px;
      width: 3px;
      padding: 2px;
    }
  }
`;

export const LeaveCommentBlock = styled.div`
  display: flex;
  padding: 3px;
  width: 24.3%;

  margin: 5px auto 9px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
`;

export const InputBlock = styled.div`
  display: flex;
  padding: 3px;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Textarea = styled.textarea`
  height: 100%;
  width: 80%;
  resize: none;
  border: none;
  font: inherit;
  font-size: 12px;
  outline: none;
`;

export const LeaveBtn = styled(Button)`
  padding: 4px;
  margin: 0 auto;
  border-radius: 12px;
  text-transform: uppercase;
  font: inherit;
  font-size: 13px;
  :hover {
    background: #b2ff59;
  }
`;

export const FollowID = styled.div`
  width: 100%;

  display: flex;
  align-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 4px;

  justify-content: space-between;

  p {
    margin: 0;
    text-align: center;
    color: black;
    font-size: 12px;
    span {
      color: green;
    }
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 2px;
    height: 15px;
    width: 15px;
    border: none;
    background: transparent;
  }
`;

export const Error = styled.p`
  width: 100%;
  margin: 0;
  color: red;
  font-size: 10px;
`;
