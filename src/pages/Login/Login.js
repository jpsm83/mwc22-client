import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const Login = (props) => {
  const [userFields, setUserFields] = useState({ email: "", password: "" });
  const [userErrors, setUserErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  // on server i am getting first "options" "get" "post"  in this order
  // with async await i could change it for "options" "post" "get" expect the home page update data without hard refres
  // did not work - data is correct but home page is not refreshing
  // useEffect runs at the begging only and those pages are not related to force it to update
  // i will try put everything in global state with redux

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
    <div className="flex justify-center -mt-20 sm:-mt-52 md:-mt-72 lg:-mt-96">
      <div className="max-w-3xl m-3 z-10 rounded-lg bg-yellow-600 bg-opacity-70 mb-6">
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
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(Login);
