import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";
import Footer from "../../components/Footer/Footer";

const Login = (props) => {
  const [userFields, setUserFields] = useState({ email: "", password: "" });
  const [userErrors, setUserErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      // props.login comes from context/auth.context.js - withAuth
      await props.login(userFields);
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
          buttonType="Login"
          loginPage={true}
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
export default withAuth(Login);
