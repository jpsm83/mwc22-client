/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import UserService from "../../services/user.service";
import { withAuth } from "../../context/auth.context";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
  const userService = new UserService();

  const { user } = props;

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    refreshState();
  }, []);

  const refreshState = async () => {
    await userService
      .get()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = (e) => {
    let searchedUsers = e.target.value;
    let filterUsers = users.filter((user) => {
      return user.username.toLowerCase().includes(searchedUsers.toLowerCase());
    });
    setFilteredUsers({ searchedUsers: filterUsers });
  };

  const displayfilteredUsers = () => {
    return filteredUsers.map((user) => {
      // spreed operator replace name/value from user - it is a shortcut
      return <UserCard key={user.id} {...user} />;
    });
  };

  //never update state inside render (setState), it causes infinity loop
  const displayUsers = () => {
    return users.map((user) => {
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
        {users.length === 0 ? (
          <p className="text-lg font-bold">
            We got no user registered so far...
          </p>
        ) : filteredUsers.length > 0 ? (
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

export default withAuth(Home);
