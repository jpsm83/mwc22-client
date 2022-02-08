import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const Login = (props) => {
  const [userFields, setUserFields] = useState({});
  const [userErrors, setUserErrors] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preDefault();
    if (isValid()) {
      // props.login comes from context/auth.context.js - withAuth
      props.login(userFields);
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
    if(userErrors){
    return !Object.keys(userErrors).some((key) => userErrors[key]);
  }}

  return (
    <div className="flex justify-center">
      <UserForm
        isValid={() => isValid()}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        {...userFields}
        {...userErrors}
        buttonType="Login"
        loginPage={true}
      />
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Login);
