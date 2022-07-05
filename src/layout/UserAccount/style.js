import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Body = styled.div`
  padding: 40px 20px;

  h2 {
    text-align: center;
    margin: 0 auto 30px;
  }
`;

export const UserCard = styled.div`
  height: min-content;
  width: 100%;
  border: 2px solid black;
  padding: 5px;
`;

export const UserCardHeader = styled.span`
  display: block;
  font-weight: 500;
  text-decoration: underline;
  text-align: center;
`;
