import styled from "styled-components";
import { ReactComponent as Heart } from "./heart.svg";

export const Like = styled(Heart)`
  height: 32px;
  width: 32px;
  & path.border {
    fill: black;
  }
  & path.background {
    fill: ${(props) => (props.liked ? "red" : "transparent")};
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const LikeBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;

  p {
    width: 20px;
    margin-left: 15px;
  }
`;
