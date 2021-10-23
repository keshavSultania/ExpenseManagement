import React, { useEffect, useState } from "react";
import List from "../List";
import Dropdown from "../Dropdown";
import Billform from "../BillForm";
import styled from "styled-components";
import { deleteBill, hightlightBills } from "../../redux/actions/bill";
import { toggleBillForm } from "../../redux/actions/billform";
import { useDispatch, useSelector } from "react-redux";
import TimeSeries from "../TimeSeries";

const ParentWrapper = styled.div``;

const StyledUtilityWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
`;

const BillContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [budget, setBudget] = useState(0);
  const [sum, setSum] = useState(0);
  const [showgraph, setShowGraph] = useState(false);
  const { bill, billform } = state;
  const { show: showBillForm, editFormData } = billform;
  const unFilteredData = bill.data;
  const filteredData = bill.filteredData;
  const selectedFilter = bill.filter;

  const buttonClick = (d) => {
    dispatch(toggleBillForm(d));
  };

  const deleteButtonclick = (id) => {
    dispatch(deleteBill(id));
  };

  const budgetHandler = (e) => {
    setBudget(e.target.value);
  };

  const showTimeSeries = () => {
    setShowGraph(!showgraph);
  };

  useEffect(() => {
    getMonthlyTotal();
  }, [filteredData, unFilteredData]);

  const getMonthlyTotal = () => {
    const d = selectedFilter !== "None" ? filteredData : unFilteredData;
    let total = 0;
    d.forEach((element) => {
      total = total + Number(element.amount);
    });
    setSum(total);
  };

  return (
    <ParentWrapper>
      <StyledUtilityWrapper style={{ backgroundColor: "pink" }}>
        <Dropdown />
        <div>
          Budget
          <input
            style={{ width: "50px" }}
            value={budget}
            onChange={budgetHandler}
          />
          {/* No. of bills
          <input
            style={{ width: "20px" }}
            value={budget}
            onChange={budgetHandler}
          /> */}
          <button onClick={() => dispatch(hightlightBills(budget))}>
            Highlight Bills
          </button>
        </div>
      </StyledUtilityWrapper>
      <StyledUtilityWrapper style={{ backgroundColor: "purple" }}>
        <button style={{ width: "200px" }} onClick={() => showTimeSeries()}>
          {" "}
          Show Time Series{" "}
        </button>
        <button style={{ width: "100px" }} onClick={() => buttonClick()}>
          Add Bill
        </button>
      </StyledUtilityWrapper>

      {showBillForm && <Billform defaultData={editFormData} />}
      <h3> Total Monthly Bill : {sum} </h3>
      <List
        buttonClick={buttonClick}
        deleteButtonclick={deleteButtonclick}
        data={selectedFilter !== "None" ? filteredData : unFilteredData}
      />
      {showgraph && (
        <TimeSeries bills={unFilteredData} closeClick={showTimeSeries} />
      )}
    </ParentWrapper>
  );
};

export default BillContainer;
