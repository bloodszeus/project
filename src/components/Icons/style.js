import styled from "styled-components";

export const IconWrapper = styled.div`
  height: ${({ size }) => (size ? `${size}px` : "15px")};
  width: ${({ size }) => (size ? `${size}px` : "15px")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
`;
