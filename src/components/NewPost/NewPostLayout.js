import { Icons } from "components/Icons";
import React, { useMemo } from "react";
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
  const STATUS = useMemo(() => {
    return {
      succeeded: <Success>Successfully</Success>,
      loading: <Icons name={"Loader"} size={30} />,
      edit: (
        <>
          <Success>Successfully</Success>
          <ConfirmBtn type="button" onClick={goBack}>
            GO BACK
          </ConfirmBtn>
        </>
      ),
      idle: <ConfirmBtn>{confirmText}</ConfirmBtn>,
    };
  }, []);

  const currentStatus = useMemo(() => {
    if (status === "succeeded" && edit) return "edit";
    return status;
  }, [status]);

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
        {STATUS[currentStatus]}
        {error !== null && <Error>{error}</Error>}
      </Form>
    </Wrapper>
  );
};
