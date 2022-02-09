import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const EditUser = (props) => {
  const [userFields, setUserFields] = useState({});
  const [userErrors, setUserErrors] = useState({
    email: null,
    password: null,
    username: null,
    firstname: null,
    lastname: null,
    skills: null,
    description: null,
  });

  const { user, edit, deleteUser } = props;

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
      setTimeout(navigate("/"), 2000);
    }
  };

  const deleteCurrentUser = (e) => {
    // props.deleteUser comes from context/auth.context.js - withAuth
    // it has been destructured above from props
    deleteUser(user.id);
    navigate("/");
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
    <div className="flex justify-center -mt-20 sm:-mt-36 md:-mt-48 lg:-mt-72">
      <div className="max-w-3xl m-3 z-10 rounded-lg bg-yellow-600 bg-opacity-70 mb-6">
        <UserForm
          isValid={() => isValid()}
          handleSubmit={(e) => handleSubmit(e)}
          handleChange={(e) => handleChange(e)}
          deleteCurrentUser={(e) => deleteCurrentUser(e)}
          userFields={userFields}
          userErrors={userErrors}
          buttonType="Update"
          editUserPage={true}
        />
      </div>
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(EditUser);
