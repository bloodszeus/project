import React from "react";
//Constants
import { SignInInput } from "constants/SignInInfo";
//Components
import { Input } from "components/Input PropTypes";
//Styles
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

export const SignInLayout = ({ onPageChange, form, submit }) => {
  return (
    <Wrapper>
      <BlockContainer>
        <Block>
          <Section>
            <Title>Create new user ?</Title>
            <ButtonSignUp onClick={onPageChange}>Sign Up</ButtonSignUp>
          </Section>
        </Block>
        <FormContainer>
          <FormField onSubmit={submit}>
            <FormTitle>Log In</FormTitle>
            {SignInInput.map((item) => (
              <Input
                key={item.id}
                type={item.type}
                label={item.label}
                {...form.register(item.name)}
                placeholder={item.placeholder}
                error={form.formState.errors[item.name]?.message}
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
