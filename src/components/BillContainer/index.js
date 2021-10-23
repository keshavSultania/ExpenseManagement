import React, { useState } from "react";
import List from "../List";
import Dropdown from "../Dropdown";
import Billform from "../BillForm";
import styled from "styled-components";
import { deleteBill } from "../../redux/actions/bill";
import { toggleBillForm } from "../../redux/actions/billform";
import { useDispatch, useSelector } from "react-redux";
import TimeSeries from "../TimeSeries";

const ParentWrapper = styled.div``;

const StyledUtilityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BillContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [budget, setBudget] = useState(0);
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

  return (
    <ParentWrapper>
      <StyledUtilityWrapper>
        <Dropdown />
        <div>
          Budget
          <input value={budget} onChange={budgetHandler} />
        </div>
        <button onClick={() => buttonClick()}> Add </button>
        <button onClick={() => showTimeSeries()}> Show Time Series </button>
      </StyledUtilityWrapper>
      {showBillForm && <Billform defaultData={editFormData} />}
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
