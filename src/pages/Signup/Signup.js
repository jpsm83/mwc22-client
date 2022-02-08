import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const Signup = (props) => {

  const [userFields, setUserFields] = useState({email: "", password: ""});
  const [userErrors, setUserErrors] = useState({email: null, password: null});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preDefault();
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
    console.log(userFields);
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
    <div className="flex justify-center">
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
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Signup);
