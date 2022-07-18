import React, { useEffect } from "react";
import { PaginationLayout } from "./PaginationLayout";

import _ from "lodash";
import { PageButton } from "./style";

export const Pagination = ({
  total,
  limit,
  setSkip,
  search,
  currentPage,
  setCurrentPage,
}) => {
  const pagesCount = Math.ceil(total / limit);

  useEffect(() => {
    const skip = limit * (currentPage - 1);
    setSkip((prevState) => ({ ...prevState, skip: skip }));
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const centerRange = _.filter(pages, function (i) {
    if (currentPage >= 4 && currentPage <= pagesCount - 3)
      return i >= currentPage - 1 && i < currentPage + 2;
    if (currentPage < 4) return i <= currentPage + 3 && i <= 4;
    if (currentPage > pagesCount - 3)
      return i >= currentPage - 3 && i >= pagesCount - 3;
  });

  const first = _.take(pages, 1);
  const last = _.takeRight(pages, 1);

  const renderedBtn = (arr) => {
    const newArr = arr.map((page) => {
      return (
        <PageButton
          key={page}
          onClick={() => setCurrentPage(page)}
          $color={page === currentPage}
        >
          {page}
        </PageButton>
      );
    });
    return newArr;
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <PaginationLayout
      renderedBtn={renderedBtn}
      first={first}
      last={last}
      btnCenter={centerRange}
      pagesCount={pagesCount}
      prevPage={handlePrevPage}
      nextPage={handleNextPage}
      totalPages={pages}
      currPage={currentPage}
    />
  );
};
