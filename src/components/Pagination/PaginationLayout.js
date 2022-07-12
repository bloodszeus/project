import React from "react";
import { Icons } from "components/Icons";
import { PageBtn, Wrapper } from "./style";
import _ from "lodash";

export const PaginationLayout = ({
  currPage,
  renderPageNumbers,
  prevPage,
  nextPage,
  pagesCount,
}) => {
  return (
    <>
      {pagesCount > 1 && (
        <Wrapper>
          {currPage > 1 && (
            <PageBtn onClick={prevPage}>
              <Icons name={"PrevArrow"} size={25} margin={"0px"} />
            </PageBtn>
          )}
          {pagesCount > 6 && (
            <>
              {renderPageNumbers[0]}
              {currPage < 4 && (
                <>
                  {renderPageNumbers[1]}
                  {renderPageNumbers[2]}
                  {renderPageNumbers[3]}
                  <PageBtn>...</PageBtn>
                </>
              )}
              {currPage >= 4 && currPage < renderPageNumbers.length - 2 && (
                <>
                  <PageBtn>...</PageBtn>
                  {renderPageNumbers[currPage - 2]}
                  {renderPageNumbers[currPage - 1]}
                  {renderPageNumbers[currPage]}
                  <PageBtn>...</PageBtn>
                </>
              )}
              {currPage >= renderPageNumbers.length - 2 && (
                <>
                  <PageBtn>...</PageBtn>
                  {_.nth(renderPageNumbers, -4)}
                  {_.nth(renderPageNumbers, -3)}
                  {_.nth(renderPageNumbers, -2)}
                </>
              )}
              {_.last(renderPageNumbers)}
            </>
          )}
          {pagesCount <= 6 && renderPageNumbers}
          {currPage < renderPageNumbers.length && (
            <PageBtn onClick={nextPage}>
              <Icons name={"NextArrow"} size={25} margin={"0px"} />
            </PageBtn>
          )}
        </Wrapper>
      )}
    </>
  );
};
