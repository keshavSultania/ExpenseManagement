import React from "react";
import List from "../List";
import Dropdown from "../Dropdown";
import Billform from "../BillForm";
import styled from "styled-components";
import { deleteBill } from "../../redux/actions/bill";
import { toggleBillForm } from "../../redux/actions/billform";
import { useDispatch, useSelector } from "react-redux";

const ParentWrapper = styled.div``;

// const OverLay = styled.div`
//   background-color: black;
//   z-index: 100;
//   opacity: 0.7;
//   position: absolute;
//   height: 100%;
//   width: 100%;
// `;

const StyledUtilityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BillContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { bill, billform } = state;
  console.log(bill);
  const { show: showBillForm, editFormData } = billform;
  const unFilteredData = useSelector((state) => state.bill.data);
  const filteredData = useSelector((state) => state.bill.filteredData);
  const selectedFilter = useSelector((state) => state.bill.filter);

  const buttonClick = (d) => {
    dispatch(toggleBillForm(d));
    console.log("button clicked", d);
  };

  const deleteButtonclick = (id) => {
    dispatch(deleteBill(id));
  };
  return (
    <ParentWrapper>
      <StyledUtilityWrapper>
        <Dropdown />
        <button onClick={() => buttonClick()}> Add </button>
      </StyledUtilityWrapper>
      {/* <OverLay /> */}
      {showBillForm && <Billform defaultData={editFormData} />}
      <List
        buttonClick={buttonClick}
        deleteButtonclick={deleteButtonclick}
        data={selectedFilter !== "None" ? filteredData : unFilteredData}
      />
    </ParentWrapper>
  );
};

export default BillContainer;
