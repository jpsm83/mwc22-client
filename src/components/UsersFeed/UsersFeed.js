import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import UserService from "../../services/user.service";
import Search from "../Search/Search";

const UsersFeed = () => {
  const userService = new UserService();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    userService
      .get()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

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
      // spreed operator replace name/value from user - it is a shortcut
      return <UserCard key={user.id} {...user} />;
    });
  };

  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-between p-3">
          {users.length === 0 ? (
            <p className="text-lg font-bold">We got no user registered so far...</p>
          ) : filteredUsers.length > 0 ? (
            displayfilteredUsers()
          ) : (
            displayUsers()
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersFeed