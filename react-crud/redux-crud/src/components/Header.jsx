import React from "react";
import { useContactContext } from "../contexts/contactContext";

function Header() {
  const { setInsert, setSearch } = useContactContext();

  return (
    <div className="flex justify-end mb-2 items-center gap-2">
      <input
        type="text"
        placeholder="Search phone number"
        onChange={(e) => setSearch(e.target.value)}
        className="block px-4 py-2 text-sm rounded-md focus:outline-none focus:border border"
      />
      <button
        onClick={() => setInsert(true)}
        className="px-4 py-2 text-white bg-[#0383F9] flex gap-2 items-center rounded-md text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={20}
          height={20}
          color="#ffffff"
          fill="none"
        >
          <path
            d="M12 8V16M16 12L8 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        New Record
      </button>
    </div>
  );
}

export default Header;
