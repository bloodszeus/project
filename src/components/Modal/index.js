import { Icons } from "components/Icons";
import React from "react";
import { Background, CloseModal, Content } from "./style";

export const Modal = ({ children, showState }) => {
  const { showModal, setShowModal } = showState;

  return (
    <Background showModal={showModal} onMouseDown={() => setShowModal(false)}>
      <Content onMouseDown={(e) => e.stopPropagation()}>
        <CloseModal onClick={() => setShowModal(false)}>
          <Icons name={"Close"} size={32} />
        </CloseModal>
        {children}
      </Content>
    </Background>
  );
};
