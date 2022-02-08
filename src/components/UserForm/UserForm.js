import React from "react";

const UserForm = ({
  handleSubmit,
  handleChange,
  errors,
  fields: { username, firstname, lastname, password, experience,  skills, email, photo, description, country, city },
  signup,
  editUser,
  isValid,
  buttonType,
  goBack,
}) => {

  return (
    <div className="m-6">
      <div className="flex mx-auto flex-col shadow-2xl rounded-lg max-w-5xl p-3 sm:p-6">
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          {(signup || editUser) && (
            <div className="flex flex-col">
              <label className="labels" htmlFor="username">
                Username:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
              />
              {errors.username && (
                <p className="errorInputs sm:text-md">{errors.username}</p>
              )}
            </div>
          )}

          {editUser && (
            <div className="flex flex-col">
              <label className="labels" htmlFor="photo">
                Photo:
              </label>
              <input
                className="inputs sm:text-md"
                type="text"
                name="photo"
                value={photo}
                onChange={(event) => handleChange(event)}
              />
              {errors.photo && (
                <p className="errorInputs sm:text-md">{errors.photo}</p>
              )}
            </div>
          )}

          <div className="flex flex-col">
            <label className="labels" htmlFor="email">
              Email:
            </label>
            <input
              className="inputs sm:text-md"
              type="text"
              name="email"
              value={email}
              onChange={(event) => handleChange(event)}
            />
            {errors.email && (
              <p className="errorInputs sm:text-md">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="labels" htmlFor="password">
              Password:
            </label>
            <input
              className="inputs sm:text-md"
              type="password"
              name="password"
              value={password}
              onChange={(event) => handleChange(event)}
            />
            {errors.password && (
              <p className="errorInputs sm:text-md">{errors.password}</p>
            )}
          </div>

          <div className="text-center space-x-6">
            <button
              className="cursor-pointer shadow-md bg-green-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              disabled={!isValid()}
              type="submit"
            >
              {buttonType}
            </button>
            <button
              onClick={() => goBack()}
              className="cursor-pointer shadow-md bg-red-800 mt-4 px-4 py-1 text-center hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
              type="submit"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm