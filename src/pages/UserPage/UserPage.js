import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserService from "../../services/user.service";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const userService = new UserService();

  const params = useParams();

  const [selectedUser, setSelectedUser] = useState();

  // useEffect is the first function to execute in a component

  useEffect(() => {
    const { id } = params;
    userService
      .getOne(id)
      .then((res) => {
        setSelectedUser(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <main className="flex max-w-7xl mx-auto mt-3">
        <div className="flex flex-col w-full">
          <UserDetails {...selectedUser} />
        </div>
      </main>
    </div>
  );
};

export default UserPage;
