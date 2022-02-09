import React from "react";
import { Link } from "react-router-dom";

const UserDetails = ({
  firstname,
  lastname,
  experience,
  fields,
  skills,
  description,
  country,
  city,
  email,
  photo,
}) => {
  return (
    <div className="flex flex-col shadow-2xl rounded-lg">
      <div className="flex flex-col m-3 items-center sm:items-stretch sm:flex-row">
        <div className="flex justify-center rounded-full h-60 w-60 sm:rounded-lg shadow-2xl items-center flex-shrink-0 overflow-hidden">
          <img className="w-full h-full object-cover" src={photo} alt={`${firstname} ${lastname}`} />
        </div>
        <div className="flex flex-col sm:ml-4 justify-between sm:items-stretch items-center font-bold text-white text-shadow-lg w-full">
          <p className="text-lg sm:text-2xl border-b-2 ">
            {`${firstname} ${lastname}`}
          </p>
          <p className="text-sm sm:text-md">{`Looking for a ${fields} position. `}</p>
          <p className="text-sm sm:text-md">{`${experience} yeas of experience. `}</p>
          <p className="text-sm sm:text-md">{`Email: ${email}`}</p>
          <p className="text-sm sm:text-md">{`Based in ${city}, ${country}`}</p>
        </div>
      </div>
      <div className="border-2 rounded-lg m-3 mt-4 p-2 bg-gray-200">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          SKILLS
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">{skills}</p>
      </div>
      <div className="border-2 rounded-lg m-3 mt-4 p-2 bg-gray-200">
        <p className="text-md sm:text-lg font-bold text-gray-700 text-center">
          DESCRIPTION
        </p>
        <p className="text-sm sm:text-md text-gray-700 text-center">
          {description}
        </p>
      </div>
      <div className="flex justify-center mb-6 mt-4 pr-3">
        <Link to="/">
          <button className="cursor-pointer shadow-md items-center pb-1 text-center px-4 hover:shadow-xl hover:scale-110 transition transform duration-200 ease-out active:scale-100 rounded-lg text-white bg-yellow-600">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
