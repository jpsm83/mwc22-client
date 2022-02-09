import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Search = ({ handleSearch }) => {
  return (
    <div className="bg-yellow-400 hover:bg-yellow-500 mx-20 flex flex-grow items-center justify-between h-10 rounded-lg cursor-pointer">
      <input
        onChange={handleSearch}
        className="p-2 border-none w-full rounded-l-lg focus:outline-none px-4"
        type="text"
        placeholder="Dish Name"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
};

export default Search;
