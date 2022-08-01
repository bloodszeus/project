import React from "react";
import { Link } from "react-router-dom";
// Components
import { Button } from "../Button";
import { Modal } from "../Modal";
import { NewPost } from "../NewPost";
// Style
import { BtnWrapper, CreatePostBtn } from "./style";

export const CreatePostModalLayout = ({
  error,
  logged,
  submit,
  status,
  showModal,
  getPostData,
  setShowModal,
  showModalHandler,
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
              confirmText={"Create"}
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
