import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 0 auto;
  border-bottom: 0.7px solid grey;

  @media (max-width: 1000px) {
    width: 50%;
  }
  @media (max-width: 620px) {
    width: 70%;
  }
  padding: 5px;
`;

export const Line = styled.hr`
  display: block;
  margin: 5px auto 5px;
  height: 2px;
  width: 50%;
`;

export const Title = styled.h2`
  margin-top: 5px;
  margin-bottom: 0px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
`;

export const Descr = styled.span`
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  font-size: 15px;
`;
export const FullDescription = styled.span`
  text-align: center;
  font-size: 15px;
  width: 100%;
  word-wrap: break-word;
`;
