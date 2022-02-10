import React, { useEffect, useState } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import UserService from "../../services/user.service";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

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
    <div className="flex items-center flex-col mt-24">
        <div className="max-w-3xl m-3 z-10 rounded-lg bg-gradient-to-b from-yellow-600 to-transparent mb-6">
          <UserDetails {...selectedUser} />
        </div>
        <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UserPage;

