import React from "react";
import { NewPost } from "components/NewPost";
import { Body, FormWrapper, Wrapper } from "./style";
import { Header } from "../Header";

export const EditPostLayout = ({
  postData,
  status,
  editStatus,
  getUpdatedData,
  submit,
  error,
}) => {
  return (
    <>
      <Body>
        <Header />
        <Wrapper>
          {status === "succeeded" && (
            <>
              <h2>Edit Mode</h2>
              <FormWrapper>
                <NewPost
                  error={error}
                  submit={submit}
                  title={postData.title}
                  fullText={postData.fullText}
                  descr={postData.description}
                  status={editStatus}
                  setPostData={getUpdatedData}
                  edit={true}
                  confirmText={"confirm"}
                />
              </FormWrapper>
            </>
          )}
        </Wrapper>
      </Body>
    </>
  );
};
