import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowBtn = styled.button`
  height: 25px;
  width: 25px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: transparent;
`;

export const Dots = styled.div`
  height: 25px;
  width: 25px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: transparent;
  font-weight: bold;
  line-height: 1;
  cursor: default;
  color: grey;
`;

export const PageButton = styled.button`
  height: 25px;
  width: 25px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.$color ? "#C4D7E0" : null)};

  :hover {
    color: white;
    background: grey;
  }
`;
