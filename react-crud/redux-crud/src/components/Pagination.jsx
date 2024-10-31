import React from "react";

function Pagination() {
  return (
    <nav className="bg-white text-left text-sm mt-4 inline-block border border-gray-300 rounded">
      <div className="flex">
        <a
          href="#"
          className="px-4 py-2 hover:bg-gray-50 border-r border-gray-300"
        >
          Previous
        </a>
        <a
          href="#"
          className="px-4 py-2 hover:bg-gray-50 border-r border-gray-300"
        >
          1
        </a>
        <a
          href="#"
          className="px-4 py-2 hover:bg-gray-50 border-r border-gray-300"
        >
          2
        </a>
        <a
          href="#"
          className="px-4 py-2 hover:bg-gray-50 border-r border-gray-300"
        >
          3
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray-50">
          Next
        </a>
      </div>
    </nav>
  );
}

export default Pagination;
