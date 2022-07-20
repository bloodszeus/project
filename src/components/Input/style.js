import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 7px;
  border: solid 1px ${({ error }) => (error ? "red" : "#333")};
  font: inherit;
  border-radius: 3px;
`;

export const Wrapper = styled.div`
  width: 100%;
  label {
    margin: 3px 0;
    font-size: 16px;
  }
  span {
    display: block;
    font-size: 14px;
    color: red;
  }
`;
