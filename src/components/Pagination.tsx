import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="px-4 py-2 ml-2 bg-blue-500 text-white rounded"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
