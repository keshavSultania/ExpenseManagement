import React, { useState } from "react";
import { filterBills, resetFilter } from "../../redux/actions/bill";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const dispatch = useDispatch();

  const categories = [
    { id: "none", displayName: "None" },
    { id: "foodNDining", displayName: "FoodNDining" },
    { id: "utility", displayName: "Utility" },
    { id: "shopping", displayName: "Shopping" },
    { id: "education", displayName: "Education" },
    { id: "personalCare", displayName: "Personal Care" },
    { id: "travel", displayName: "Travel" }
  ];

  const [value, setValue] = useState("none");

  const onSelectHandler = (e) => {
    const val = e.target.value;
    console.log(val);
    setValue(val);
    val === "None" ? dispatch(resetFilter()) : dispatch(filterBills(val));
  };
  return (
    <div>
      Filter{"  "}
      <select value={value} onChange={(e) => onSelectHandler(e)}>
        {categories.map((d) => {
          return (
            <option key={d.displayName} value={d.displayName}>
              {d.displayName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
