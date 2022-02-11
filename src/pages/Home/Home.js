import React, { useEffect } from "react";
import UserCard from "../../components/UserCard/UserCard";
import Footer from "../../components/Footer/Footer";
// redux tools to be used
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  fetchAsyncUsers,
} from "../../features/usersSlice";

const Home = () => {

  const data = useSelector(getAllUsers);
  const dispatch = useDispatch();

  // useEffect is the first function to execute in a component
  useEffect(() => {
      dispatch(fetchAsyncUsers())
  }, [dispatch]);


  // const handleSearch = (e) => {
  //   let searchedUsers = e.target.value;
  //   let filterUsers = data.filter((user) => {
  //     return user.username.toLowerCase().includes(searchedUsers.toLowerCase());
  //   });
  //   setFilteredUsers({ searchedUsers: filterUsers });
  // };

  // const displayfilteredUsers = () => {
  //   return filteredUsers.map((user) => {
  //     // spreed operator replace name/value from user - it is a shortcut
  //     return <UserCard key={user.id} {...user} />;
  //   });
  // };

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

  return (
    <div>
      <div className="flex flex-wrap justify-around p-3 mt-40">
        {/* {data.length === 0 ? (
          <p className="text-lg font-bold">
            We got no user registered so far...
          </p>
        ) : filteredUsers.length > 0 ? (
          displayfilteredUsers()
        ) : (
          displayUsers()
        )} */}
        {displayUsers()}
      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
