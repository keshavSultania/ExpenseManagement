import React from "react";
import Bill from "../Bill";

const List = ({ buttonClick, data }) => {
  return (
    <div>
      {data.map((d) => {
        return <Bill data={d} key={d.id} buttonClick={buttonClick} />;
      })}
    </div>
  );
};

export default List;
