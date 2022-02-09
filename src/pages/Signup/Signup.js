import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const Signup = (props) => {

  const [userFields, setUserFields] = useState({email: "", password: "", username: ""});
  const [userErrors, setUserErrors] = useState({email: null, password: null, username: null});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      // props.signup comes from context/auth.context.js - withAuth
      props.signup(userFields);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFields({
      ...userFields,
      [name]: value,
    })
    setUserErrors({
      ...userErrors,
      [name]: userValidators[name](value),
    });
  };

  const isValid = () => {
    if(userErrors){
    return !Object.keys(userErrors).some((key) => userErrors[key]);
  }}

  return (
    <div className="flex justify-center -mt-28 sm:-mt-44 md:-mt-96">
      <div className="max-w-3xl m-3 z-10 rounded-lg bg-yellow-600 bg-opacity-70 mb-6">
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
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Signup);
