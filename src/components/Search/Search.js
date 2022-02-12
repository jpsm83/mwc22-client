import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { setSearchHandle, getAllUsers } from "../../features/usersSlice";

const Search = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const data = useSelector(getAllUsers);
  const dispatch = useDispatch();

    // useEffect is the first function to execute in a component
    useEffect(() => {
      dispatch(setSearchHandle(filteredUsers));
    }, [filteredUsers]);
  
// console.log(data)
// console.log(filteredUsers)

  const handleSearch = (e) => {
    let searchedUsers = e.target.value;
    let filterUsers = data.filter((user) => {
      // it is not working with any other option but .username - No idea why???
      return user.username.toLowerCase().includes(searchedUsers.toLowerCase());
    })
    setFilteredUsers(filterUsers);
  };

  return (
    <div className="bg-yellow-400 hover:bg-yellow-500 mx-5 flex flex-grow items-center justify-between h-10 rounded-lg cursor-pointer">
      <input
        onChange={handleSearch}
        className="p-2 border-none w-full rounded-l-lg focus:outline-none px-4"
        type="text"
        placeholder="Search Developer"
      />
      <SearchIcon className="h-12 p-4" />
    </div>
  );
};

export default Search;
