import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { NewPost } from "../NewPost";

import { BtnWrapper, CreatePostBtn } from "./style";

export const CreatePostModalLayout = ({
  logged,
  showModal,
  setShowModal,
  showModalHandler,
  submit,
  getPostData,
  status,
  error,
}) => {
  return (
    <BtnWrapper>
      <CreatePostBtn onClick={showModalHandler}>Create new post</CreatePostBtn>
      {showModal && (
        <Modal showState={{ showModal, setShowModal }}>
          {logged ? (
            <NewPost
              submit={submit}
              setPostData={getPostData}
              status={status}
              error={error}
            />
          ) : (
            <>
              <h2>You must be logged in to create a new post</h2>
              <Link to={"/user-valid/sign-in"}>
                <Button>Sign In</Button>
              </Link>
              <Link to={"/user-valid/sign-up"}>
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </Modal>
      )}
    </BtnWrapper>
  );
};
