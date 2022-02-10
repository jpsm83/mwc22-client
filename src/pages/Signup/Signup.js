import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";
import Footer from "../../components/Footer/Footer";

const Signup = (props) => {
  const [userFields, setUserFields] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [userErrors, setUserErrors] = useState({
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();

  // on server i am getting first "options" "get" "post"  in this order
  // with async await i could change it for "options" "post" "get" expect the home page update data without hard refres
  // did not work - data is correct but home page is not refreshing
  // useEffect runs at the begging only and those pages are not related to force it to update
  // i will try put everything in global state with redux

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      // props.signup comes from context/auth.context.js - withAuth
      await props.signup(userFields);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFields({
      ...userFields,
      [name]: value,
    });
    setUserErrors({
      ...userErrors,
      [name]: userValidators[name](value),
    });
  };

  const isValid = () => {
    if (userErrors) {
      // it is returning true - isValid = true
      return !Object.keys(userErrors).some((key) => userErrors[key]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="m-3 z-10 rounded-lg bg-yellow-600 bg-opacity-70 mb-6">
        <UserForm
          isValid={() => isValid()}
          handleSubmit={(e) => handleSubmit(e)}
          handleChange={(e) => handleChange(e)}
          userFields={userFields}
          userErrors={userErrors}
          buttonType="Signup"
          signupPage={true}
        />
      </div>
      <div className="bottom-0 w-full absolute">
      <Footer />
      </div>
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Signup);
