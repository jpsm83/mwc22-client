import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { withAuth } from "../../context/auth.context";

const Nav = (props) => {
  // user and logout come from context/auth.context.js
  // it can be use in any component because it is exported as AuthProvider
  // and wrap all the aplication in its root index.js
  const { user, logout } = props;

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
          ? "fixed flex justify-end items-center top-0 p-5 w-full z-10 ease-in duration-500 bg-gradient-to-l from-yellow-700 to-transparent"
          : "fixed flex justify-end items-center top-0 p-5 w-full ease-in bg-gradient-to-l from-yellow-700 to-transparent duration-500 bg-yellow-700 z-30"
      }
    >
      {user ? (
        <div className="text-gray-200 flex items-center text-right text-xs sm:text-sm space-x-6 mr-4 whitespace-nowrap">
          <div className="flex items-center space-x-2">
            <div className=" cursor-pointer">
              <Link to={`/edit-user/${user.id}`}>
                <p className="font-bold">{user.username}</p>
              </Link>
              <p className="sm:text-sm" onClick={logout}>
                Logout
              </p>
            </div>
            <img
              src={user.photo}
              alt={user.username}
              className="object-cover h-12 w-12 flex cursor-auto justify-center flex-shrink-0 overflow-hidden items-center rounded-full"
            />
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
