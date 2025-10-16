import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between xl:text-xs text-sm ">
      <button className=" py-2 px-3 rounded-sm shadow-md bg-gray-200 ">
        Previous
      </button>
      <button className=" py-2 px-3 rounded-sm shadow-md bg-gray-200 ">
        Next
      </button>
    </div>
  );
};

export default Pagination;
