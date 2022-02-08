import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userValidators } from "../../components/Validators/Validators";
import UserForm from "../../components/UserForm/UserForm";
import { withAuth } from "../../context/auth.context";

const EditUser = (props) => {
  const [userFields, setUserFields] = useState({});
  const [userErrors, setUserErrors] = useState(null);

  const navigate = useNavigate();
  const buttonType = "Update User";

  // useEffect is the first function to execute in a component
  useEffect(() => {
    // props.user comes from context/auth.context.js - withAuth
    setUserFields(props.user);
  }, []);

  const handleSubmit = (e) => {
    e.preDefault();
    if (isValid()) {
      // props.edit comes from context/auth.context.js - withAuth
      props.edit(userFields);
      goBack();
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
    const { errors } = userErrors;
    return !Object.keys(errors).some((key) => errors[key]);
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <UserForm
        goBack={() => goBack()}
        isValid={() => isValid()}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}
        {...userFields}
        {...userErrors}
        buttonType={buttonType}
      />
    </div>
  );
};

// withAuth comes from context and alow the component to use it
// methods - isLoading, isLoggedIn, user, signup, login, logout, edit
export default withAuth(EditUser);
