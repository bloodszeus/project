import styled from "styled-components";
import { ReactComponent as Heart } from "./heart.svg";

export const Like = styled(Heart)`
  height: ${(props) => (props.height ? `${props.height}px` : "27px")};
  width: ${(props) => (props.width ? `${props.width}px` : "27px")};

  & path.border {
    fill: #e53935;
  }
  & path.background {
    fill: ${(props) => (props.$liked ? "red" : "transparent")};
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
    text-shadow: 4px 4px 9px rgba(66, 68, 90, 1);
    width: 20px;
    margin-left: 10px;
  }
`;
