import React from "react";
import { useDispatch } from "react-redux";
import { setFilterOption } from "../../features/usersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const fielsSelection = ["Any", "FrontEnd", "BackEnd", "Full Stack", "Data"];

  return (
    <div className="flex justify-center flex-wrap text-center mt-28">
      {fielsSelection.map((field) => {
        return (
          <button className="cursor-pointer shadow-md bg-yellow-600 mx-4 my-2 px-4 py-1 text-center hover:bg-yellow-700 hover:scale-105 transition transform duration-200 ease-out active:scale-95 text-white rounded-lg"
            onClick={() => {
              dispatch(setFilterOption(field));
            }}
          >
            {field}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
