import styled from "styled-components";
import { Button } from "../../components/Button";
export const Header = styled.header`
  height: 70px;
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 2px grey solid;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderRightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 65px;
    width: 65px;
    margin-right: 10px;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    a {
      color: #d46124;
      text-decoration: none;
    }
    a.active {
      color: red;
      text-decoration: underline;
    }
    li {
      cursor: pointer;
      margin-right: 8px;
      &:hover {
        transform: scale(1.03);
      }
    }
  }
`;

export const SignUpBtn = styled(Button)`
  padding: 8px;
  background-color: buttonface;
  &:hover {
    background-color: #fff;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    margin-top: 5px;
    color: black;
    font-size: 12px;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
