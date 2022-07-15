import styled from "styled-components";

export const Post = styled.div`
  width: min-content;
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
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
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

export const Img = styled.img`
  min-height: 400px;
  min-width: 400px;
`;
