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
          <button
            className="buttons"
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
