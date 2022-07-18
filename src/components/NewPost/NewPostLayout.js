import { Icons } from "components/Icons";
import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { ConfirmBtn, Error, Form, Success, Textarea, Wrapper } from "./style";

export const NewPostLayout = ({
  submit,
  formRef,
  post,
  changeHandler,
  status,
  error,
  edit,
  goBack,
  confirmText,
}) => {
  return (
    <Wrapper>
      <Form onSubmit={(e) => submit(e)} ref={formRef}>
        <Input
          label="Title"
          name="title"
          placeholder="Enter your title"
          type="text"
          required
          maxLength={50}
          value={post.title || ""}
          onChange={changeHandler}
        ></Input>
        <label>Description</label>
        <Textarea
          name="description"
          placeholder="Your description"
          required
          maxLength={80}
          value={"" || post.description}
          onChange={changeHandler}
        ></Textarea>
        <label>Text</label>
        <Textarea
          name="fullText"
          placeholder="Text"
          required
          maxLength={400}
          value={"" || post.fullText}
          onChange={changeHandler}
        ></Textarea>
        {status !== "succeeded" && <ConfirmBtn>{confirmText}</ConfirmBtn>}
        {status === "loading" && <Icons name={"Loader"} size={30} />}
        {status === "succeeded" && <Success>Successfully</Success>}
        {status === "succeeded" && edit && (
          <Button type="button" onClick={goBack}>
            GO BACK
          </Button>
        )}
        {error !== null && <Error>{error}</Error>}
      </Form>
    </Wrapper>
  );
};
