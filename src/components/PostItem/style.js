import { Button } from "components/Button";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Post = styled.div`
  width: min-content;
  height: ${(props) => (props.full ? "100%" : "515px")};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 0.7px solid #474747;
  border-radius: 10px;
  padding: 15px;
  margin: 10px auto 20px;
  background-color: rgba(209, 209, 209, 0.5);
  box-shadow: 12px -3px 20px -12px rgba(0, 0, 0, 1);
  @media (max-width: 500px) {
    height: 415px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.logged ? "space-between" : "flex-end")};
`;

export const ActionBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ActionBtn = styled(Button)`
  display: block;
  height: 40px;
  width: 40px;
  padding: 0;
  border-radius: 30px;
  background: transparent;
  margin-right: 5px;
  text-transform: uppercase;
  :hover {
    background: rgba(74, 222, 128, 0.6);
  }
`;

export const PostHeader = styled.strong`
  font-size: 1.3em;
  display: block;
  text-align: center;
  overflow-wrap: anywhere;
`;

export const PostText = styled.p`
  display: block;
  text-align: center;
  overflow-wrap: anywhere;
`;

export const Img = styled(LazyLoadImage)`
  height: 300px;
  width: 300px;
  @media (max-width: 500px) {
    height: 210px;
    width: 210px;
  }
`;

export const Time = styled.p`
  position: absolute;
  bottom: 3px;
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 12px;
  color: #666666;
`;

export const Author = styled.p`
  margin: 4px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
`;
