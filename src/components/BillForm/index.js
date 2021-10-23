import React, { useState } from "react";
import styled from "styled-components";
import { toggleBillForm } from "../../redux/actions/billform";
import { useDispatch, useSelector } from "react-redux";
import { addBill, editBill } from "../../redux/actions/bill";

const StyledFormWrapper = styled.div`
  background-color: white;
  position: fixed;
  z-index: 10000;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px solid black;
`;

const Billform = (props) => {
  const { defaultData } = props;
  const [desc, setDesc] = useState(defaultData ? defaultData.description : "");
  const [category, setCategory] = useState(
    defaultData ? defaultData.category : ""
  );
  const [amount, setAmount] = useState(defaultData ? defaultData.amount : "");
  const [date, setDate] = useState(defaultData ? defaultData.date : "");

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const { bill, billform } = state;
  const lastId = bill.lastUsedId;

  const buttonClickHandler = () => {
    const billObject = {
      ...(defaultData ? { id: defaultData.id } : { id: lastId + 1 }),
      description: desc,
      category: category,
      amount: amount,
      date: date
    };
    defaultData === undefined
      ? dispatch(addBill(billObject))
      : dispatch(editBill(billObject));

    dispatch(toggleBillForm());
  };

  const inputOnChangeHandler = (e, field) => {
    const val = e.target.value;
    switch (field) {
      case "desc":
        setDesc(val);
        break;
      case "category":
        setCategory(val);
        break;
      case "amount":
        setAmount(val);
        break;
      case "date":
        setDate(val);
        break;
      default:
        break;
    }
  };

  return (
    <StyledFormWrapper>
      <div>Bill form</div>
      <div>
        {"description"} :
        <input onChange={(e) => inputOnChangeHandler(e, "desc")} value={desc} />
      </div>
      <div>
        {"Category"} :
        <input
          onChange={(e) => inputOnChangeHandler(e, "category")}
          value={category}
        />
      </div>
      <div>
        {"Amount"} :
        <input
          onChange={(e) => inputOnChangeHandler(e, "amount")}
          value={amount}
        />
      </div>
      <div>
        {"Date"} :
        <input onChange={(e) => inputOnChangeHandler(e, "date")} value={date} />
      </div>
      <button onClick={() => dispatch(toggleBillForm())}> Close </button>
      <button onClick={buttonClickHandler}> Submit </button>
    </StyledFormWrapper>
  );
};

export default Billform;
