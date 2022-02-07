import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/user.service";
import { withAuth } from "../../context/auth.context";

const UserDetails = ({
  id,
  username,
  firstname,
  lastname,
  experience,
  fields,
  skills,
  email,
  photo,
  description,
  country,
  city,
  user,
}) => {
  // connection with UserService to be able to use all it services
  // user.service.js is the bridge to connect frontend with backend
  const userService = new UserService();

  // using navigate hook to push to another page from the browser navigate
  const navigate = useNavigate();

  const sameUser = () => {
    // if (id === user.id) {
    //   return true;
    // }
    return true
  };

  const deleteUser = () => {
    userService
      .deleteOne(id)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col shadow-2xl rounded-lg w-200 my-6 mx-3">
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="flex justify-center items-center flex-shrink-0 rounded-t-lg overflow-hidden">
          <img className="h-60" src={photo} alt={`${firstname} ${lastname}`} />
        </div>

        <div className="flex flex-col justify-between w-full ml-3 sm:ml-6">
          <p className="text-lg sm:text-2xl font-bold text-red-700 border-b-2">
            {`${firstname} ${lastname}`}
          </p>
          <button className="flex text-sm sm:text-md text-blue-700 justify-end">
            {username}
          </button>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {fields}
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {experience}
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {email}
          </li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">{city}</li>
          <li className="text-sm sm:text-md text-gray-700 font-bold">
            {country}
          </li>
        </div>
        <button className="flex align-top">
          <StarIcon className="w-8 text-yellow-400" />
        </button>
      </div>
      <div className="border-2 rounded-lg m-3 mt-4 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          INGREDIENTS
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">{skills}</p>
      </div>
      <div className="border-2 rounded-lg m-3 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          PREPARATION
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {description}
        </p>
      </div>
      <div className="border-2 rounded-lg m-3 p-2 bg-gray-100">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          HOW TO COOK
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {description}
        </p>
      </div>

      <div className="flex space-x-6 justify-center mb-6 mt-4">
        {sameUser() && (
          <div className="flex space-x-6">
            <Link to={`/edit-user/${id}`}>
              <button className="typesCousine text-white bg-green-800">
                Edit
              </button>
            </Link>
            <Link to="/">
              <button
                className="typesCousine text-white bg-red-800"
                onClick={() => deleteUser()}
              >
                Delete
              </button>
            </Link>
          </div>
        )}
        <Link to="/">
          <button className="typesCousine text-white bg-yellow-600">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(UserDetails);
