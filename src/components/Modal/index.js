import React from "react";
// Hooks
import { useClickOutside } from "hooks/useClickOutside";
// Components
import { Icons } from "components/Icons";
// Style
import { Background, CloseModal, Content } from "./style";

export const Modal = ({ children, showState }) => {
  const { showModal, setShowModal } = showState;

  const ref = useClickOutside(() => setShowModal(false));

  return (
    <Background showModal={showModal}>
      <Content ref={ref}>
        <CloseModal onClick={() => setShowModal(false)}>
          <Icons name={"Close"} size={32} />
        </CloseModal>
        {children}
      </Content>
    </Background>
  );
};
