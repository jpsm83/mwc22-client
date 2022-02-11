import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { withAuth } from "../../context/auth.context";
import Search from "../Search/Search";

const Nav = ({ user, logout, handleSearch }) => {
  // user and logout come from context/auth.context.js
  // it can be use in any component because it is exported as AuthProvider
  // and wrap all the aplication in its root index.js

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    // create an event listener for the scroll navbar
    window.addEventListener("scroll", transitionNavBar);
    // and them clean up the same event listener
    // you dont have to clean up but it is a good pratice to do
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={
        !show
          ? "navDisplay"
          : "navDisplay bg-yellow-700"
      }
    >
      <Link to={"/"}>
        <div>
          <img src="/img/mwc22-logo.png" alt="mwc logo" className="h-14" />
        </div>
      </Link>
      <div className="hidden sm:flex flex-grow">
      {/* <Search handleSearch={(e) => handleSearch(e)} /> */}
      </div>
      {user ? (
        <div className="text-gray-200 flex items-center text-right text-xs sm:text-sm space-x-6 mr-4 whitespace-nowrap">
          <div className="flex items-center space-x-2">
            <Link to={`/edit-user/${user.id}`}>
              <button className="cursor-pointer hidden sm:flex font-bold mx-5 shadow-md items-center py-2 text-center px-8 hover:shadow-xl hover:scale-110 transition transform duration-200 ease-out active:scale-100 rounded-lg text-gray-500 bg-white">
                Edit Profile
              </button>{" "}
            </Link>
            <div>
              <p className="font-bold">Hello {user.username}</p>
              <p
                className="sm:text-sm cursor-pointer"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </p>
            </div>
            <Link to={`/edit-user/${user.id}`}>
              <img
                src={user.photo}
                alt={user.username}
                className="object-cover cursor-pointer  h-12 w-12 flex justify-center flex-shrink-0 overflow-hidden items-center rounded-full"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-gray-200 flex cursor-pointer items-center text-right text-xs sm:text-sm space-x-6 mr-4 whitespace-nowrap">
          <Link to="/login">
            <p className="font-bold">LogIn</p>
          </Link>
          <Link to="/signup">
            <p className="sm:text-sm">SignIn</p>
          </Link>
        </div>
      )}
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Nav);
