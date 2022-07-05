import React from "react";
import {
  BlockContainer,
  Block,
  Section,
  Title,
  FormTitle,
  FormContainer,
  FormField,
  ButtonSignIn,
  ButtonSubmit,
  Wrapper,
  ThanksMassage,
} from "./style";

import { Input } from "../../components/Input";
import { Inputs } from "../../constants/SignUpInfo";

export const SignUpLayout = ({
  onSubmit,
  onChange,
  onPageChange,
  error,
  onBlur,
  isValid,
}) => {
  return (
    <Wrapper>
      <BlockContainer>
        <Block>
          <Section>
            <Title>Do you have account ?</Title>
            <ButtonSignIn onClick={onPageChange}>Sign In</ButtonSignIn>
          </Section>
        </Block>

        <FormContainer>
          {isValid ? (
            <ThanksMassage>Thanks for registration</ThanksMassage>
          ) : (
            <FormField onSubmit={onSubmit}>
              <FormTitle>Registration</FormTitle>
              {Inputs.map((item, index) => (
                <Input
                  onBlur={onBlur}
                  onChange={onChange}
                  key={index}
                  label={item.label}
                  name={item.name}
                  type={item.type}
                  id={item.id}
                  placeholder={item.placeholder}
                  error={error[item.name]}
                />
              ))}
              <ButtonSubmit>Sign Up</ButtonSubmit>
            </FormField>
          )}
        </FormContainer>
      </BlockContainer>
    </Wrapper>
  );
};
