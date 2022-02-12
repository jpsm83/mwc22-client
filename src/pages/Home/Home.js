import React, { useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import Footer from "../../components/Footer/Footer";
// redux tools to be used
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  fetchAsyncUsers,
  searchedtUsers,
  filterOptionSelected,
} from "../../features/usersSlice";
import Filter from "../../components/Filter/Filter";

const Home = () => {
  const data = useSelector(getAllUsers);
  const searchedData = useSelector(searchedtUsers);
  const selectedFilter = useSelector(filterOptionSelected);

  const dispatch = useDispatch();

  // useEffect is the first function to execute in a component
  useEffect(() => {
    dispatch(fetchAsyncUsers());
  }, [searchedData, selectedFilter]);

  //never update state inside render (setState), it causes infinity loop
  const displayUsers = () => {
    return data
      .filter((user) => {
        if (selectedFilter === "Any") {
          return true;
        }
        return selectedFilter === user.fields;
      })
      .map((user) => {
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

  const displayfilteredUsers = () => {
    return searchedData
      .filter((user) => {
        if (selectedFilter === "Any") {
          return true;
        }
        return selectedFilter === user.fields;
      })
      .map((user) => {
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
    <div className="flex flex-col h-full">
    <Filter />
      <div className="flex flex-wrap justify-around p-3">
        {data.length === 0 ? (
          <p className="labels text-shadow-lg text-center m-6 underline text-xl">
            We got no user registered so far...
          </p>
        ) : searchedData.length > 0 ? (
          displayfilteredUsers()
        ) : (
          displayUsers()
        )}
      </div>
        <Footer />
    </div>
  );
};

export default Home;
