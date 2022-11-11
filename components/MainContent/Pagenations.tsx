import { FC } from "react";
import { usePagination } from "utils/hooks/usePagination";
import PropTypes from "prop-types";

export interface PaginationProps {
  currentPage: number;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  onPageChange: Function;
}

const Pagination: FC<PaginationProps> = ({
  onPageChange,
  currentPage,
  totalCount,
  siblingCount,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <>
      <button></button>
      {paginationRange.map((value, index) => {
        return <p key={index.toString()}>{value}</p>;
      })}
      <button></button>
    </>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.Function,
};
export default Pagination;
