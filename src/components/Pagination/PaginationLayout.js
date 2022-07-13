import React from "react";
import { Icons } from "components/Icons";
import { ArrowBtn, Dots, Wrapper } from "./style";
import _ from "lodash";

export const PaginationLayout = ({
  currPage,
  prevPage,
  nextPage,
  pagesCount,
  totalPages,
  btnCenter,
  btnStart,
  first,
  last,
  renderedBtn,
  endRange,
}) => {
  return (
    <>
      {pagesCount > 1 && (
        <Wrapper>
          {currPage > 1 && (
            <ArrowBtn onClick={prevPage}>
              <Icons name={"PrevArrow"} size={25} margin={"0px"} />
            </ArrowBtn>
          )}

          {currPage < 4 && (
            <>
              {renderedBtn(btnStart)}
              <Dots>...</Dots>
              {renderedBtn(last)}
            </>
          )}

          {currPage >= 4 && currPage < totalPages.length - 2 && (
            <>
              {renderedBtn(first)}
              <Dots>...</Dots>
              {renderedBtn(btnCenter)}
              <Dots>...</Dots>
              {renderedBtn(last)}
            </>
          )}

          {currPage >= totalPages.length - 2 && (
            <>
              {renderedBtn(first)}
              <Dots>...</Dots>
              {renderedBtn(endRange)}
            </>
          )}

          {currPage < totalPages.length && (
            <ArrowBtn onClick={nextPage}>
              <Icons name={"NextArrow"} size={25} margin={"0px"} />
            </ArrowBtn>
          )}
        </Wrapper>
      )}
    </>
  );
};
