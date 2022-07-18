import styled from "styled-components";

export const Body = styled.div`
  height: 100%;
`;

export const Wrapper = styled.div`
  margin: 20px 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    /* text-align: center; */
    margin: 10px auto 0;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 30px;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
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
