import React, { useEffect, useMemo, useState } from "react";
import { PaginationLayout } from "./PaginationLayout";

import _ from "lodash";
import { PageButton } from "./style";

export const Pagination = ({ total, limit, setSkip, search }) => {
  const pagesCount = Math.ceil(total / limit);
  const [currentPage, setCurrentPage] = useState(7);

  useEffect(() => {
    const skip = limit * (currentPage - 1);
    setSkip(skip);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const centerRange = _.filter(
    pages,
    (i) => i >= currentPage - 1 && i < currentPage + 2
  );
  const startRange = _.take(pages, 4);
  const endRange = _.takeRight(pages, 4);
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
      endRange={endRange}
      renderedBtn={renderedBtn}
      first={first}
      last={last}
      btnStart={startRange}
      btnCenter={centerRange}
      pagesCount={pagesCount}
      prevPage={handlePrevPage}
      nextPage={handleNextPage}
      totalPages={pages}
      setCurrentPage={setCurrentPage}
      currPage={currentPage}
    />
  );
};
