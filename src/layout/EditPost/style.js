import styled from "styled-components";

export const Body = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`
  margin: 20px 50px auto;

  h2 {
    background: -webkit-linear-gradient(
      106deg,
      rgba(255, 235, 6, 1) 40%,
      rgba(171, 33, 15, 1) 55%,
      rgba(171, 33, 15, 1) 57%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-align: center;
    margin: 10px auto 0;
  }
`;

export const FormWrapper = styled.div`
  width: fit-content;
  height: auto;
  border: 1px solid red;
  border-radius: 2px;
  box-shadow: 1px 9px 20px 3px rgb(225 103 103 / 56%);

  margin: 0 auto;
`;
