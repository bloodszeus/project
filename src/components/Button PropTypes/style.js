import styled from "styled-components";

const variants = {
  primary: {
    background: "white",
    color: "black",
  },
  secondary: {
    background: "black",
    color: "white",
  },
};

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${({ color }) => variants[color].background};
  color: ${({ color }) => variants[color].color};
`;
