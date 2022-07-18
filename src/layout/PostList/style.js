import { Button } from "components/Button";
import styled from "styled-components";

export const Header = styled.h2`
  color: rgb(33, 33, 33);
  text-transform: uppercase;
  text-align: center;
  font-size: 45px;
  margin: 0;
  margin-bottom: 10px;
`;

export const Param = styled.span`
  margin-right: 5px;
`;

export const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-gap: 1em;
  margin-top: 20px;
  justify-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 40px;
  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media (max-width: 920px) {
    grid-template-columns: 100%;
  }
`;

export const SelectBlock = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1;
  height: 35px;
`;

export const ShowBy = styled.select`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0;
  width: max-content;
  font-size: 15px;
  font-family: inherit;
`;

export const ViewSetting = styled.div`
  display: grid;
  grid-template-columns: 33% 33%;
  justify-items: center;
  align-items: center;
`;

export const Search = styled.input`
  display: block;
  margin: 0 auto 20px;
  outline: none;
  border: none;
  border-bottom: 0.7px solid black;
  width: 20rem;
  height: 30px;
  text-align: center;
  text-transform: uppercase;
  ::placeholder {
    text-align: center;
    padding: 3px;
    border: none;
    font-size: 15px;
    color: #95a5a6;
    text-transform: uppercase;
  }
`;

export const ShowMoreBtn = styled(Button)`
  display: block;
  height: 30px;
  width: 30px;
  margin: 10px auto;
  padding: 3px;
`;
