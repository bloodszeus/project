import styled from "styled-components";
import { Button } from "components/Button";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d64b4b;
  transition: all 0.6s ease;
  overflow: hidden;
  min-height: 100vh;
`;
export const BlockContainer = styled.div`
  width: 800px;
  height: 500px;
  padding: 40px 0px;
  position: relative;
`;

export const Block = styled.div`
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Section = styled.section`
  width: 50%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 10px;
`;

export const FormTitle = styled.h3`
  font-size: 25px;
  font-weight: 500;
  color: #333;
`;

export const FormContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 0.4 },
}))`
  height: 100%;
  width: 50%;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 100;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const FormField = styled.form`
  width: 100%;
  padding: 50px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transition: 0.5s;
`;

export const ButtonSignUp = styled(Button)`
  font-size: 16px;
  font-weight: 500;
  transition: all 0.5s ease;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
    background-color: #ececec;
  }
`;
export const ButtonSubmit = styled(Button)`
  font-size: inherit;
  background-color: #d64b4b;
  color: #fff;
  padding: 10px 50px;
  width: 100%;
  margin-top: 10px;
  border-radius: 3px;
  &:hover {
    transform: scale(0.99);
    transition: all 0.4s ease;
  }
`;

export const ForgotLink = styled.span`
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
