import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled.div`
  z-index: 150;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.showModal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 },
}))`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  z-index: 20;
  position: relative;
`;

export const CloseModal = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  :before,
  :after {
    position: absolute;
    left: 15px;
    content: "";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;
