import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelected, filteredFields } from "../../features/usersSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const selectedFilter = useSelector(filteredFields)

  const fielsSelection = ["Any", "FrontEnd", "BackEnd", "Full Stack", "Data"];

  return (
    <div className="text-center">
      <h1>i am the filter</h1>
      {fielsSelection.map((field) => {
          
        return <p onClick={() => {
            dispatch(filterSelected(field))
        }}>{field}</p>;
      })}
    </div>
  );
};

export default Filter;
