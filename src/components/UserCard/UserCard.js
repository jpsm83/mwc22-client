import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({
  id,
  firstname,
  lastname,
  photo,
  experience,
  fields,
  country,
  city,
}) => {
  return (
    <div>
      <Link
        to={`/user-page/${id}`}
        className="flex w-50 justify-center items-center shadow-lg flex-col m-3 rounded-lg hover:shadow-2xl transition transform duration-200 ease-in-out bg-gradient-to-t from-white to-transparent"
      >
        <p className="text-shadow-lg mb-3 text-md sm:text-lg m-1 capitalize font-bold text-white text-center">
          {firstname}
          <br />
          {lastname}
        </p>
        <div className="flex justify-center scale-105 rounded-full items-center w-48 h-48 hover:scale-110 transition transform duration-200 ease-in-out overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={photo}
            alt={firstname}
          />
        </div>
        <h3 className="absolute -right-3 bottom-20 font-bold bg-yellow-600 rounded-full text-white p-2">
          {fields}
        </h3>
        <div className="text-sm sm:text-md font-bold mt-3">
          <p className="text-yellow-800 text-center">
            Years of experience: {experience}
          </p>
          <div className="flex justify-between capitalize p-2 text-blue-900">
            <p>{city}</p>
            <p>{country}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
