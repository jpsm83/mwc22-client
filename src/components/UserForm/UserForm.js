import React from "react";
import { useNavigate } from "react-router-dom";
import { withAuth } from "../../context/auth.context";

const UserForm = ({
  user,
  deleteCurrentUser,
  handleSubmit,
  handleChange,
  userFields,
  userErrors,
  signupPage,
  loginPage,
  editUserPage,
  isValid,
  buttonType,
}) => {
  const {
    username,
    firstname,
    lastname,
    password,
    experience,
    skills,
    email,
    photo,
    fields,
    description,
    country,
    city,
  } = userFields;

  const navigate = useNavigate();

  return (
      <div className="flex flex-col w-full shadow-2xl rounded-lg p-3 sm:p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {(signupPage || editUserPage) && (
            <div className="flex flex-col">
              <label
                className="labels sm:text-md text-shadow-lg"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className="inputs sm:text-md focus:outline-none"
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
              />
              {userErrors.username && (
                <p className="errorInputs sm:text-md">{userErrors.username}</p>
              )}
            </div>
          )}
          {(signupPage || editUserPage || loginPage) && (
            <>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                {userErrors.email && (
                  <p className="errorInputs sm:text-md">{userErrors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                {userErrors.password && (
                  <p className="errorInputs sm:text-md">
                    {userErrors.password}
                  </p>
                )}
              </div>
            </>
          )}
          {editUserPage && (
            <>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="photo"
                >
                  Photo:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="photo"
                  value={photo}
                  onChange={handleChange}
                />
                {userErrors.photo && (
                  <p className="errorInputs sm:text-md">{userErrors.photo}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="firstname"
                >
                  Firstname:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
                {userErrors.firstname && (
                  <p className="errorInputs sm:text-md">
                    {userErrors.firstname}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="lastname"
                >
                  Lastname:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                />
                {userErrors.lastname && (
                  <p className="errorInputs sm:text-md">
                    {userErrors.lastname}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="country"
                >
                  Country:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="country"
                  value={country}
                  onChange={handleChange}
                />
                {userErrors.country && (
                  <p className="errorInputs sm:text-md">{userErrors.country}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="city"
                >
                  City:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                />
                {userErrors.city && (
                  <p className="errorInputs sm:text-md">{userErrors.city}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="fields"
                >
                  Fields:
                </label>
                <select
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="fields"
                  value={fields}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    Choose your stack
                  </option>
                  <option value="FrontEnd">FrontEnd</option>
                  <option value="BackEnd">BackEnd</option>
                  <option value="Data">Data</option>
                  <option value="Full Stack">Full Stack</option>
                </select>
                {userErrors.fields && (
                  <p className="errorInputs sm:text-md">{userErrors.fields}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="experience"
                >
                  Experience:
                </label>
                <input
                  className="inputs sm:text-md focus:outline-none"
                  type="number"
                  name="experience"
                  value={experience}
                  onChange={handleChange}
                />
                {userErrors.experience && (
                  <p className="errorInputs sm:text-md">
                    {userErrors.experience}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="skills"
                >
                  Skills:
                </label>
                <textarea
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="skills"
                  value={skills}
                  onChange={handleChange}
                />
                {userErrors.skills && (
                  <p className="errorInputs sm:text-md">{userErrors.skills}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  className="labels sm:text-md text-shadow-lg"
                  htmlFor="description"
                >
                  Description:
                </label>
                <textarea
                  className="inputs sm:text-md focus:outline-none"
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
                {userErrors.description && (
                  <p className="errorInputs sm:text-md">
                    {userErrors.description}
                  </p>
                )}
              </div>
            </>
          )}
          <div className="text-center space-x-4">
            <button
              className="cursor-pointer shadow-md bg-green-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              disabled={!isValid}
              type="submit"
            >
              {buttonType}
            </button>
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer shadow-md bg-yellow-700 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
            >
              Cancel
            </button>
            {user && (
              <button
                onClick={deleteCurrentUser}
                className="cursor-pointer shadow-md bg-red-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              >
                Delete Profile
              </button>
            )}
          </div>
        </form>
    </div>
  );
};

export default withAuth(UserForm);
