import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, firstname, lastname, photo, experience, fields, country, city }) => {
  return (
    <div className="flex justify-center items-center shadow-lg flex-col m-3 rounded-lg w-53 hover:shadow-2xl transition transform duration-200 ease-in-out bg-gradient-to-t from-white to-transparent">
      <Link to={`/user-page/${id}`}>
        <h4 className="text-shadow-lg text-md sm:text-lg m-1 text- text- capitalize font-bold text-white text-center">
          {`${firstname} ${lastname}`}
        </h4>
        <div className="flex justify-center rounded-full items-center w-40 h-40 hover:scale-105 transition transform duration-200 ease-in-out overflow-hidden">
          <img
            className="min-w-full min-h-full shrink-0"
            src={photo}
            alt={firstname}
          />
        </div>
        <h3 className="absolute -right-3 bottom-20 font-bold rounded-full bg-yellow-600 text-white p-2">{fields}</h3>
        <div className="text-sm sm:text-md font-bold mt-3">
          <p className="text-yellow-800 text-center">{experience} years of experience</p>
          <div className="flex justify-between p-2 text-blue-900">
          <p>{city}</p>
          <p>{country}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
