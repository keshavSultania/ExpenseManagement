import React from "react";
import Bill from "../Bill";

const List = ({ buttonClick, data, deleteButtonclick }) => {
  return (
    <div>
      {data.map((d) => {
        return (
          <Bill
            data={d}
            key={d.id}
            buttonClick={buttonClick}
            deleteButtonclick={deleteButtonclick}
          />
        );
      })}
    </div>
  );
};

export default List;
