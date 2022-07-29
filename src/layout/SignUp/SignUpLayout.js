import React from "react";
//Components
import { Input } from "components/Input PropTypes";
//Constants
import { Inputs } from "constants/SignUpInfo";
//Styles
import {
  Block,
  Title,
  Section,
  Wrapper,
  FormField,
  FormTitle,
  ButtonSubmit,
  ButtonSignIn,
  FormContainer,
  ThanksMassage,
  BlockContainer,
} from "./style";

export const SignUpLayout = ({
  submit,
  errors,
  isValid,
  register,
  pageChange,
}) => {
  return (
    <Wrapper>
      <BlockContainer>
        <Block>
          <Section>
            <Title>Do you have account ?</Title>
            <ButtonSignIn onClick={pageChange}>Sign In</ButtonSignIn>
          </Section>
        </Block>

        <FormContainer>
          {isValid ? (
            <ThanksMassage>Thanks for registration</ThanksMassage>
          ) : (
            <>
              <FormField onSubmit={submit}>
                <FormTitle>Registration</FormTitle>
                {Inputs.map((item) => (
                  <Input
                    key={item.name}
                    type={item.type}
                    label={item.label}
                    {...register(item.name)}
                    placeholder={item.placeholder}
                    error={"" || errors[item.name]?.message}
                  />
                ))}
                <ButtonSubmit>Sign Up</ButtonSubmit>
              </FormField>
            </>
          )}
        </FormContainer>
      </BlockContainer>
    </Wrapper>
  );
};
