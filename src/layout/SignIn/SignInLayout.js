import React from "react";

import {
  BlockContainer,
  Block,
  Section,
  Title,
  ButtonSignUp,
  FormContainer,
  FormField,
  FormTitle,
  ButtonSubmit,
  ForgotLink,
  Wrapper,
} from "./style";

import { Input } from "../../components/Input";
import { SignInInput } from "../../constants/SignInInfo";
import { Link } from "react-router-dom";

export const SignInLayout = ({
  onSubmit,
  onChange,
  onPageChange,
  onBlur,
  error,
}) => {
  return (
    <Wrapper>
      <BlockContainer>
        <Block>
          <Section>
            <Title>Create new user ?</Title>
            <ButtonSignUp onClick={onPageChange}>Sign Up</ButtonSignUp>
          </Section>
        </Block>

        <FormContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4 }}
        >
          <FormField onSubmit={onSubmit}>
            <FormTitle>Log In</FormTitle>
            {SignInInput.map((item, index) => (
              <Input
                onBlur={onBlur}
                onChange={onChange}
                error={error[item.name]}
                key={index}
                label={item.label}
                name={item.name}
                type={item.type}
                id={item.id}
                placeholder={item.placeholder}
              />
            ))}
            <ButtonSubmit>Sign In</ButtonSubmit>
            <ForgotLink>Forgot password ?</ForgotLink>
          </FormField>
        </FormContainer>
      </BlockContainer>
    </Wrapper>
  );
};
