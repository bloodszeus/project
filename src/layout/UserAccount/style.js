import styled from "styled-components";
import { motion } from "framer-motion";
import { Icons } from "components/Icons";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Body = styled.div`
  padding: 40px 20px;

  h2 {
    word-wrap: break-word;
    text-align: center;
    margin: 0 auto 10px;
  }
`;

export const ResetBtn = styled(motion.button).attrs(() => ({
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
}))`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  margin: 5px;
  padding: 0;
  position: absolute;
  left: 90px;
  top: 5px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px;
  align-items: center;
`;

export const UserCard = styled.div`
  height: min-content;
  width: 100%;

  padding: 5px;
`;

export const UserCardHeader = styled.span`
  font-weight: 500;
  text-decoration: underline;
  text-align: center;
`;
export const EditLoader = styled(Icons)`
  bottom: -5px;
  left: 10px;
  position: absolute;
`;

export const SuccessTitle = styled(motion.p).attrs(() => ({
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
}))`
  color: green;
  margin: 3px 2px;
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 25px;
`;

export const SaveBtn = styled(motion.button).attrs(() => ({
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
}))`
  position: absolute;
  left: 0;
  position: absolute;
  left: 0;
  border: none;
  border-radius: 10px;
  background-color: rgba(69, 186, 67, 0.2);
  transition: 0.4s all;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  color: rgba(69, 186, 67, 1);
  padding: 5px 7px;
  height: 30px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: lightgreen;
    background-color: rgba(69, 186, 67, 1);
  }
`;

export const Avatar = styled.img`
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;
