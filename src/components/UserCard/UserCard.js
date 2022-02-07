import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const UserCard = ({ id, firstname, lastname, photo, experience }) => {
  return (
    <div className="flex flex-grow shadow-lg flex-col m-1.5 rounded-lg w-60 hover:shadow-2xl hover:scale-105 transition transform duration-200 ease-out">
      <Link to={`/user-detail/${id}`}>
        <h4 className="text-sm sm:text-lg m-2 font-bold text-red-700 text-center">
          {`${firstname} ${lastname}`}
        </h4>
        <div className="flex justify-center items-center h-44 overflow-hidden">
          <img
            className="min-w-full min-h-full shrink-0"
            src={photo}
            alt={firstname}
          />
        </div>
      </Link>
      <div className="flex justify-between m-2 items-center">
        <div>
          <p className="text-xs sm:text-sm text-blcak">Ready in {experience}</p>
        </div>
        <button className="mt-auto button">
          <StarIcon className="w-8 text-yellow-400" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
