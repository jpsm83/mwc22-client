import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const EditUser = (props) => {
  const [userFields, setUserFields] = useState({
  });
  const [userErrors, setUserErrors] = useState({
    email: null,
    password: null,
    username: null,
    firstname: null,
    lastname: null,
    skills: null,
    description: null,
  });

const { user, edit } = props

  const navigate = useNavigate();

  // useEffect is the first function to execute in a component
  useEffect(() => {
    // user comes from context/auth.context.js - withAuth
    // it has been destructured above from props
    setUserFields(user);
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      // props.edit comes from context/auth.context.js - withAuth
      // it has been destructured above from props
      edit(user.id, userFields);
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
      return !Object.keys(userErrors).some((key) => userErrors[key]);
    }
  };

  return (
    <div className="flex justify-center">
      <UserForm
        isValid={() => isValid()}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        userFields={userFields}
        userErrors={userErrors}
        buttonType="Update"
        editUserPage={true}
      />
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(EditUser);
