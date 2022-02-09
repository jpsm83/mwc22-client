import React, { useEffect, useState } from "react";
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
    <div className="flex justify-center -mt-20 sm:-mt-36 md:-mt-52 lg:-mt-80">
        <div className="md:mt-10 max-w-3xl m-3 z-10 rounded-lg bg-gradient-to-b from-yellow-600 to-transparent mb-6">
          <UserDetails {...selectedUser} />
        </div>
    </div>
  );
};

export default UserPage;

