import React, { useEffect, useMemo, useState } from "react";
import { PaginationLayout } from "./PaginationLayout";
import { PageBtn } from "./style";

export const Pagination = ({ total, limit, setSkip, search }) => {
  const pagesCount = Math.ceil(total / limit);
  const [currentPage, setCurrentPage] = useState(1);

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

  const pageNumbers = pages.map((page) => (
    <PageBtn
      key={page}
      onClick={() => setCurrentPage(page)}
      $color={page === currentPage}
    >
      {page}
    </PageBtn>
  ));

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <PaginationLayout
      pagesCount={pagesCount}
      prevPage={handlePrevPage}
      nextPage={handleNextPage}
      renderPageNumbers={pageNumbers}
      totalPages={pages}
      setCurrentPage={setCurrentPage}
      currPage={currentPage}
    />
  );
};
