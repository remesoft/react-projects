import React from "react";
import { useAppContext } from "../context/AppContext";

function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useAppContext();

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="bg-white text-left text-sm mt-4 inline-block border border-gray-300 rounded">
      <div className="flex">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 hover:bg-gray-50 border-r border-gray-300 ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page + 1)}
            className={`px-4 py-2 hover:bg-gray-50 border-r border-gray-300 ${
              currentPage === page + 1 ? "font-bold bg-gray-100" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 hover:bg-gray-50 ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
