import React, { useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import Footer from "../../components/Footer/Footer";
// redux tools to be used
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  fetchAsyncUsers,
  searchedtUsers,
  filteredFields,
} from "../../features/usersSlice";
import Filter from "../../components/Filter/Filter";


const Home = () => {
  const data = useSelector(getAllUsers);
  const searchedData = useSelector(searchedtUsers);
  const selectedFilter = useSelector(filteredFields)

  const dispatch = useDispatch();

  // useEffect is the first function to execute in a component
  useEffect(() => {
    dispatch(fetchAsyncUsers());
  }, []);

  //never update state inside render (setState), it causes infinity loop
  const displayUsers = () => {
    return data.map((user) => {
      if (
        user.firstname &&
        user.lastname &&
        user.country &&
        user.city &&
        user.experience &&
        user.fields
      ) {
        // spreed operator replace name/value from user - it is a shortcut
        return (
          <UserCard
            key={user.id}
            {...user}
            fields={user.fields ? user.fields : "Profile Inconplete"}
            firstname={user.firstname ? user.firstname : user.username}
          />
        );
      }
    });
  };


  // .filter((user) => {
  //   if(selectedFilter === "Any"){
  //     return true
  //   } return selectedFilter === user.fields
  // })


  const displayfilteredUsers = () => {
    return searchedData.map((user) => {
      if (
        user.firstname &&
        user.lastname &&
        user.country &&
        user.city &&
        user.experience &&
        user.fields
      ) {
        // spreed operator replace name/value from user - it is a shortcut
        return (
          <UserCard
            key={user.id}
            {...user}
            fields={user.fields ? user.fields : "Profile Inconplete"}
            firstname={user.firstname ? user.firstname : user.username}
          />
        );
      }
    });
  };

  return (
    <div className="mt-40">
          <Filter />
      <div className="flex flex-wrap justify-around p-3">
        {data.length === 0 ? (
          <p className="text-lg font-bold">
            We got no user registered so far...
          </p>
        ) : searchedData.length > 0 ? (
          displayfilteredUsers()
        ) : (
          displayUsers()
        )}
      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
