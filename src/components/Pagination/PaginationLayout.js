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
  first,
  last,
  renderedBtn,
}) => {
  return (
    <>
      {pagesCount > 1 && (
        <Wrapper>
          <ArrowBtn onClick={prevPage} disabled={currPage === 1}>
            <Icons name={"PrevArrow"} size={25} margin={"0px"} />
          </ArrowBtn>

          {currPage >= 4 && pagesCount > 5 && (
            <>
              {renderedBtn(first)}
              <Dots>...</Dots>
            </>
          )}
          {renderedBtn(btnCenter)}

          {currPage <= totalPages.length - 3 && pagesCount > 5 && (
            <>
              <Dots>...</Dots>
              {renderedBtn(last)}
            </>
          )}

          <ArrowBtn
            onClick={nextPage}
            disabled={currPage === totalPages.length}
          >
            <Icons name={"NextArrow"} size={25} margin={"0px"} />
          </ArrowBtn>
        </Wrapper>
      )}
    </>
  );
};
