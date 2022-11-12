import { FC } from "react";
import { usePagination } from "utils/hooks/usePagination";
import PropTypes from "prop-types";
import styles from "styles/Slogans.module.css";

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
    <div className=" flex justify-between lg:px-4 py-3">
      <button
        className={currentPage === 1 ? styles.btnHidden : styles.btn}
        disabled={currentPage === 1}
        onClick={() => onPrevious()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mt-1 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Previous
      </button>
      <div className="flex">
        {paginationRange.map((value, index) => {
          return (
            <p
              onClick={() => onPageChange(value)}
              className={
                value === currentPage ? styles.activePageNum : styles.pageNumber
              }
              key={index.toString()}
            >
              {value}
            </p>
          );
        })}
      </div>
      <button
        className={lastPage === currentPage ? styles.btnHidden : styles.btn}
        disabled={lastPage === currentPage}
        onClick={() => onNext()}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mt-1 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalCount: PropTypes.number,
  siblingCount: PropTypes.number,
  pageSize: PropTypes.number,
  onPageChange: PropTypes.func,
};
export default Pagination;
