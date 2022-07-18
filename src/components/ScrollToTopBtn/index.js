import { Icons } from "components/Icons";
import React, { useEffect, useState } from "react";
import { ToTopBtn } from "./style";

export const ScrollToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <ToTopBtn onClick={goToTop}>
          <Icons name={"ToTop"} size={30} />
        </ToTopBtn>
      )}
    </>
  );
};
