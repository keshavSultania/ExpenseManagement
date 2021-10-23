import React from "react";
import styled from "styled-components";

const BillWrapper = styled.div`
  background-color: grey;
  border: 6px solid ${({ highlight }) => (highlight ? "green" : "black")};
  margin-bottom: 8px;
  padding: 8px;
`;

const Bill = ({ data, buttonClick, deleteButtonclick }) => {
  const { id, description, category, amount, date, highlight } = data;
  return (
    <BillWrapper highlight={highlight}>
      <button onClick={() => buttonClick(data)}>Edit</button>
      <button onClick={() => deleteButtonclick(id)}>delete</button>
      <p>id: {id}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Amount: {amount}</p>
      <p>Date (mm/dd/yyyy): {date}</p>
    </BillWrapper>
  );
};

export default Bill;
