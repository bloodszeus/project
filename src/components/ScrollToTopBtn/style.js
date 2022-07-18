import { motion } from "framer-motion";
import styled from "styled-components";

export const ToTopBtn = styled(motion.button).attrs(() => ({
  initial: { opacity: 0, x: 150, scaleY: -3 },
  animate: { opacity: 1, x: 0, scaleY: 1 },
  exit: { opacity: 0, x: 150 },
  transition: { duration: 0.5 },
}))`
  background: transparent;
  position: fixed;
  right: 15px;
  bottom: 40px;
  height: 40px;
  width: 40px;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  border: 0.8px solid black;
  transition: 0.7s all ease;
  :hover {
    background-color: rgba(74, 222, 128, 0.6);
  }
`;
